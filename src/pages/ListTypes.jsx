import TypeCard from '../components/TypeCard'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import useGetTypes from '../hooks/useGetTypes'
import { Link } from 'react-router-dom'

const ListTypes = () => {

    const { types } = useGetTypes();

    if (!types) {
        return (
            <>
            <Header />
            <p>Chargement...</p>
            <Footer />
            </>
        )
    }

    return (
        <>
        <Header />
        <h1>La liste des Types</h1>
        <div className="types-list">
            {types.map((type) => {
                return (
                    <>
                    <div className="types-card" key={type.id}>
                        <Link to={"/type/" + type.name} className="links-home">
                            <TypeCard key={type.id} type={type} />
                        </Link>
                    </div>
                    </>
                )
            })}
        </div>
        <Footer />
        </>
    )
}

export default ListTypes;