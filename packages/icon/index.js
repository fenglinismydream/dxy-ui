import DxyIcon from './dxy-icon'

DxyIcon.install = (Vue) => {
  console.log(DxyIcon)
  Vue.component(DxyIcon.name, DxyIcon)
}

export default DxyIcon