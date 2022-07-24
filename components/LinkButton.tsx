interface Props {
    name: string,
    href: string,
    className?: string
}

const LinkButton = ({name, href, className} : Props) => {
    return (
        <a href={href} className={`bg-tgreen-300 mt-2 sm:mt-0 px-6 py-2 text-gray-100 hover:text-gray-300 font-tommy text-3xl rounded-2xl shadow-xl ${className}`} target="_blank" rel="noreferrer">
            {name}
        </a>
    )
}

export default LinkButton