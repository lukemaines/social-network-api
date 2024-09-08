const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: { 
            type: String,
            required: true, 
            unique: true, 
            trim: true, 
        },
        email: {
            type: String, 
            required: true, 
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Must be a valid email.'] //using regex for email matching to verify
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectIde,
                ref: 'User'
            }
        ]

    }    
);