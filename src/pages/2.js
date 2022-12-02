import React, {useState} from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import withSheets from "../hocs/sheets";

const Item = ({title, body}) => {
    const [s, ss] = useState(false)
    return (
        <div style={{textAlign: 'left', width: '100%'}}>
            <p
                className="item-link-title"
                onClick={() => ss(!s)}
            >
                {title}
            </p>
            {s &&  <p
                className="item-link-title"
                style={{padding: 50, fontSize: '2rem', lineHeight: 1}}
            >
                {body}
            </p>}
        </div>
    )
}

const IndexPage = ({data: {page1 = []}}) => {
    return (
        <Layout>
            <div style={{backgroundColor: 'black', width:'100vw', height: '30%'}}>
                <img
                    style={{width:'100%', height: '100%'}}
                    src="https://res.cloudinary.com/maximocampo/image/upload/v1650917835/lira_nmbcjl.png"
                    alt=""
                />
            </div>
                <div>
                    <h2 style={{width: 'fit-content', margin: '10px 0', backgroundColor: 'white', textAlign: "right"}}>artist's statement</h2>
                    <h2 style={{width: 'fit-content', margin: '10px 0', backgroundColor: 'white', textAlign: "right"}}>bio</h2>
                    <h2 style={{width: 'fit-content', margin: '10px 0', backgroundColor: 'white', textAlign: "right"}}>work</h2>
                    <h2 style={{width: 'fit-content', margin: '10px 0', backgroundColor: 'white', textAlign: "right"}}>as a model</h2>
                    <h2 style={{width: 'fit-content', margin: '10px 0', backgroundColor: 'white', textAlign: "right"}}>press</h2>
                    <h2 style={{width: 'fit-content', margin: '10px 0', backgroundColor: 'white', textAlign: "right"}}>contact</h2>
                </div>
            
        </Layout>
    )
}

export default withSheets(IndexPage)
