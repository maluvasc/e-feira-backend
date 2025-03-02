const database = require("../models");

class ProviderController {
	static async GetAllProviders(req, res) {
		try {
			const allProviders = await database.Providers.findAll();
			return res.status(200).json(allProviders);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async GetOneProvider(req, res) {
		const { id } = req.params;
		try {
			const providers = await database.Providers.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(providers);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async CreateAProvider(req, res) {
		const provider = req.body;
		try {
			const newProvider = await database.Providers.create(provider);
			return res.status(200).json(newProvider);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async UpdateAProvider(req, res) {
		const { id } = req.params;
		const updatedProvider = req.body;
		try {
			await database.Providers.update(updatedProvider, {
				where: { id: Number(id) },
			});
			const provider = await database.Providers.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(provider);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async DeleteAProvider(req, res) {
		const { id } = req.params;
		try {
			await database.Providers.destroy({ where: { id: Number(id) } });
			return res.status(200).json("Provider deleted with success!");
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = ProviderController;
