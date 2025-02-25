const mongoose = require('mongoose');

const preRegistrationSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
        token: { type: String, required: true },
            expires: { type: Date, required: true }
              });
                
                  const PreRegistrationModel = mongoose.model('PreRegistration', preRegistrationSchema);
                    module.exports = PreRegistrationModel;