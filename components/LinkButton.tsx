interface Props {
    name: string,
    href: string,
    className?: string
}

const LinkButton = ({name, href, className} : Props) => {
    return (
        <a href={href} className={`bg-tgreen-300 px-8 py-3 text-gray-100 hover:text-gray-300 font-tommy text-4xl rounded-2xl shadow-xl ${className}`} target="_blank" rel="noreferrer">
            {name}
        </a>
    )
}

export default LinkButton