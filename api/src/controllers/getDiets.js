const { Diets } = require("../db");
const getAllRecipes = require("./getRecipes");

const getDietsTypesApi = async () => {

  const recipes = await getAllRecipes();

  const dietsApi = recipes.map((recipe) => recipe.diets);

  const dietsAll = [];

  dietsApi.forEach((x) => x.forEach((y) => dietsAll.push(y)));

  return [...new Set(dietsAll)];

};

const getDietsTypesDb = async () => {

  // Utilizamos el metodo finAll de sequelize en el modelo Diet para acceder a todos los atributos
  const dietsAll = await Diets.findAll();

  //console.log(dietsAll);

  const dietsAllArray = [];

  dietsAll.forEach((x) => dietsAllArray.push({ name: x.name, id: x.id }));

  return dietsAllArray;

  // Recorremos dietAll para pushear en el nuevo array dietsAllArray todo nuevamente.
};

const postDiets = async () => {

  const dietsTypes = await getDietsTypesApi();

  let allDietTypes = dietsTypes.map((element) =>

    Diets.findOrCreate({ where: { name: element } })

  );

  Promise.all(allDietTypes).then((element) => console.log("Dietas Cargadas"));

};

module.exports = { getDietsTypesDb, getDietsTypesApi, postDiets };