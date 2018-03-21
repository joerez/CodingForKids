//Make a model appear, make parameters mimic jQuery syntax: '#modelname'
function modelMaker(buttonName, modelName, closeButton) {
  $(buttonName).on("click", function() {
    $(modelName).show(0);
    $(modelName).css("display", "flex");
  })

  $(closeButton).on("click", function() {
    $(modelName).hide(500);

    })

}

modelMaker('.session', '.sessionbox', '#closesession');
modelMaker('.teacher', '.teacherbox', '#closeteacher');
modelMaker('.prompts', '.promptbox', '#closepromptbox');
modelMaker('.studentListBtn', '.studentList', '#closeStudentList');
