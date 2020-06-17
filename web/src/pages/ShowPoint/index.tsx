import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

//array ou objeto: informar manualmente o tipo da variável
interface Data {
    point: {
        image: string;
        image_url: string;
        name: string;
        city: string;
        uf: string;
        email: string;
        whatsapp: string;
    }
    items:{
        title: string;
    }[];
}

interface Item {
    id: number;
    title: string;
    image_url: string;
}

const CreatePoint = () => {
    const [name, setName] = useState<string>('');
    const [image, setImage] = useState<string>('');
    // const [data, setData] = useState<Data>({} as Data);
    const [items, setItems] = useState<Item[]>([]);
    const [city, setCity] = useState<string>('');
    const [uf, setUf] = useState<string>('');

    let  { id } = useParams();

    useEffect(() =>{
        api.get(`points/${id}`)
        .then(response =>  {
            // setData(response.data);

            setName(response.data.point.name);
            setImage(response.data.point.image_url);
            setItems(response.data.items);
            setCity(response.data.point.city);
            setUf(response.data.point.uf);
        }); 
    }, [id]);

    return (
        <div id="page-show-point">
            <header>
                <img src={logo} alt="Ecoleta" />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>

            <div className="card">

                <h1 className="title">{name}</h1>

                <div className="image-wrapper">
                    <img src={ image } alt="" className="img"/>
                </div>

                <div className="items">
                    {   
                        items.map(item => item.title).join(', ')
                    }
                </div>

                <div className="endereco">
                    <p className="title">Endereço</p>
                    <p className="content">{city}, {uf}</p>
                </div>
            </div>
        </div>
    );
}

export default CreatePoint;