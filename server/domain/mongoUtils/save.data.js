const saveData = (data) => {
    data.save()
        .tap(doc => console.log(doc))
}

module.exports = saveData