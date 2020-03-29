//const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    // LISTAR TODOS OS INCIDENTES
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();

        console.log(count);
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        response.header('x-total-count', count['count(*)']);
        return response.json(incidents);

    },

    // CRIAR UM INCIDENTE
    async create(request, response) {
        const { title, description, value } = request.body;

        const ong_id = request.headers.authorization;

        // mesmo que result[0]
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({ id });
    },
    // DELETAR SEM AUTHO
    // async delete_directID(request, response) {
    //     await connection('incidents').where("id", request.params.id).delete()
    //     return
    // },
    // DELETAR COM AUTHO
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const criador = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (criador.ong_id != ong_id) {
            return response
                .status(401)
                .json({ error: 'Operation não permitida para esta ong' });
        }
        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    }

}