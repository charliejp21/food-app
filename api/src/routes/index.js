const { Router } = require('express');
const dietsRoutes = require('./dietsRoutes')
const recipesRouter = require('./recipesRoutes')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipes", recipesRouter)
router.use("/diets", dietsRoutes)

module.exports = router;
