/* 
    Event Routes:
    /api/events
*/
const { Router } = require("express");
const { check } = require("express-validator");
const {isDate} = require('../helpers/isDate')
const {validarCampos} = require('../middlewares/validar-campos');
const { validarJWT } = require("../middlewares/validar-jwt");
const {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
} = require("../controllers/events");
const router = Router();

// todas tienen que pasar por la validación del jwt:
router.use(validarJWT);

// obtener eventos:
router.get("/", getEventos);

// crear nuevo evento
router.post("/", [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatorio').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validarCampos
], crearEvento);

// actualizar evento
router.put("/:id", actualizarEvento);

// eliminar evento:
router.delete("/:id", eliminarEvento);

module.exports = router;
