import PromptCard from "@components/PromptCard"

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">{name} profile
      <span className="blue_gradient">
      </span>
      </h1>
      <p className="desc text-left">Some information here about you.</p>

      <div className='mt-10 prompt_layout'>
        {data.map(( value, index )  => (
          <PromptCard
          key = {value._id}
          order = {value}
          handleEdit = {() => handleEdit && handleEdit(value)}
          handleDelete = {() => handleDelete && handleDelete(value)}
          />
        ))}
      </div>

    </section>
    
  )
}

export default Profile