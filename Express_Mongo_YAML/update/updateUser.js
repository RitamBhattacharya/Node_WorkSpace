const express = require('express');
const { UserIdentificationSchema, UserUpdateSchema } = require('../Validation/user-validation');
const config = require('yamljs').load('./Express_Mongo_YAML/db.yaml');

async function updateUser(client, targetId, value) {
    try {
        await client.connect();
        const db = client.db(config.MONGO_DATABASE);
        const collection = db.collection(config.MONGO_COLLECTION.USER);
        return await collection.replaceOne( targetId , value);
    } catch (error) {
        throw new Error(`Failed to update document: ${error.message}`);
    }finally{
        client.close();
    }
}

const updateUserModule = (client) => {
    const router = express.Router();

    router.put("/:id", async (req, res) => {
        try {
            var { value, error } = UserIdentificationSchema.validate({ _id: req.params.id });
            if (error) {
                res.status(400).send(error.details[0].message);
                return;
            }
            const targetId=value;

            var { value, error} = UserUpdateSchema.validate(req.body);
            if (error) {
                res.status(400).send(error.details[0].message);
                return;
            }

            const data = await updateUser(client, targetId, value);
            res.status(202).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    return router;
}

module.exports = updateUserModule;
