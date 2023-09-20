type Buttonprops = {
  label: string
}

const Button = ({ label }: Buttonprops) => {
  return (
    <button className="px-7 py-4 border text-lg bg-blue-500 rounded-full text-white border-blue-800">
        {label}
    </button>
  )
}

export default Button