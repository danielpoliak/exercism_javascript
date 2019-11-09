
export class GradeSchool {
  constructor(){
    this.schoolRoster = {} 
  }

  roster() {
    let newRoster = {}
    Object.keys(this.schoolRoster).forEach(key => {
      newRoster = {
        ...newRoster,
        [key]: [...this.schoolRoster[key]]
      } 
    })
    return newRoster
  }

  add(name, grade) {
    const originalNames = this.schoolRoster[grade] || []
    const sortedNames= [...originalNames, name].sort()
    this.schoolRoster = {...this.schoolRoster,[grade]: sortedNames}
  }

  grade(grade) {
    const schoolRoster = this.schoolRoster[grade] || []
    return [...schoolRoster]
  }
}
