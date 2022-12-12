import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const FileStructure = () => {
    const [dronList, setDronList] = useState<Dron[]>([]);
    // const [siteList, setSiteList] = useState<Partial<Dron>[]>([]);
    const [isNested, setIsNested] = useState<boolean>(false);

    const fetchDronList = async () => {
        const res = await axios.get('/dron/list');
        setDronList(res.data);
        // setSiteList(res.data)
    };

    useEffect(() => {
        fetchDronList();
    }, []);

    return (
        <TreeDiv>
            <ul id="myUL">
                <li style={{display: 'flex', flexDirection: 'column'}}>
                    <Link to="/" style={{textDecoration: 'none', marginBottom: '1rem'}}>
                        <span style={{cursor: 'pointer'}}>
                        <ServerImage src={`${process.env.PUBLIC_URL}/img/home-icon-silhouette.png`}/>
                        Home
                        </span>
                    </Link>
                    <span style={{cursor: 'pointer'}} onClick={() => setIsNested(!isNested)}>
                        <ServerImage src={`${process.env.PUBLIC_URL}/img/database-storage.png`}/>
                        두산 FMPd 서버
                    </span>
                    <ul className={isNested ? 'nested' : 'active'}>
                        {dronList.map((dr) =>
                            <li>
                                <Link to={`/detail/${dr.id}`} state={{id: dr.id}}>
                                    <CircleImage src={`${process.env.PUBLIC_URL}/img/new-moon.png`}/>
                                    {dr.site_name}
                                </Link>
                            </li>
                        )}
                    </ul>
                </li>
            </ul>
        </TreeDiv>
    );
}

export default FileStructure;

const TreeDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 40px 20px 40px 20px;
  color: white;
`

const Button = styled.button`
  width: 100%;
  color: #212121;
`

const ServerImage = styled.img`
  height: 1.5rem;
  margin-right: 0.5rem;
`

const CircleImage = styled.img`
  height: 0.5rem;
  margin: 0 0.5rem 0 0.5rem;
`
