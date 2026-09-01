import { Atividades } from '../models/atividade.models.js';
import { User } from '../models/user.models.js';

export async function carregarAtividade(req, res) {
    try {
        const atividades = await Atividades.findAll({
            include: [{ model: User, attributes: ['id', 'nome', 'email', 'imagem'] }]
        });

        return res.status(200).json(atividades);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export async function criarAtividade(req, res) {
    try {
        const criarAtividade = await Atividades.create({
            tipo_atividade: req.body.tipo_atividade,
            distancia_percorrida: req.body.distancia_percorrida,
            duracao_atividade: req.body.duracao_atividade,
            quantidade_calorias: req.body.quantidade_calorias
        })

        res.status(201).json(criarAtividade)
    } catch (error) {

    }
}