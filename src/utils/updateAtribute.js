module.exports = function updateAtribute(oldAtribute, newAtribute) {
  if (newAtribute && oldAtribute !== newAtribute){
    return newAtribute
  }
  return oldAtribute
}
