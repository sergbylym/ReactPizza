import style from './SearchBlock.module.scss'
const Search = () => {
   return (
      <div>
         <input  className={style.root} placeholder="Search pizza..." />
      </div>
   )
}


export default Search