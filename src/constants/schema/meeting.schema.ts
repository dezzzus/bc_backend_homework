import { Joi, Segments } from 'celebrate';
export default {
  create: {
    [Segments.BODY]: {
      host: Joi.string().email().required(),
      name: Joi.string().required(),
      when: Joi.date().required(),
      attendees: Joi.array().required()
    },
  },
  update: {
    [Segments.BODY]: {
      host: Joi.string().email().required(),
      name: Joi.string().required(),
      when: Joi.date().required(),
      attendees: Joi.array().required()
    },
  }
};
