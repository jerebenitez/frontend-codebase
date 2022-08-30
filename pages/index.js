export default function Index(){
    return <>Hello world</>
}

Index.getLayout = function getLayout(page) {
    return (
        <>{ page }</>
    )
}
