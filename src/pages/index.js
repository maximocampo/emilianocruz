import React, {useState} from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import withSheets from "../hocs/sheets";
import gifemi from '../images/gifemi.gif'

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
    const [selected, select] = useState(null)
    
    
    return (
        <Layout>
            <div style={{position: 'relative', padding: 20, display: 'flex', flexDirection: 'column', marginTop: '10%', alignItems: 'center', maxWidth: 700}}>
                <h1 style={{width: 'fit-content'}}>
                    Emiliano Cruz
                </h1>
                
                <img style={{
                    
                    width:'80vw',
                    maxWidth: 900,
                    position: 'fixed',
                    top: '10vh',
                    zIndex: -1,
                    filter: 'brightness(0.6)'
                }} src={gifemi} alt=""/>
                
                <br/>
                {page1.map((p, i) => (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <h2
                            style={{
                                cursor: 'pointer',
                                width: 'fit-content',
                                margin: '10px 0',
                                textAlign: "right",
                                transition: '0.5s',
                                textShadow: selected === i ? "0 0px 5.4px white, 0 0 5.5px white" : 'none'
                            }}
                            onClick={() => {
                                if (p?.body?.includes('http')) {
                                    return window.location.replace(p.body)
                                }
                                select(i)
                            }}
                        >
                            {p.title}
                        </h2>
                        <p
                            style={{
                                overflow: 'hidden',
                                maxHeight: (selected === i) ? '10000px' : 0,
                                transition: '0.7s',
                            }}
                        >
                            {p.body}
                        </p>
                    </div>
                ))}
                <p
                    className="contact"
                    style={{
                        textAlign: 'right'
                    }}
                >
                    <a href="mailto:emilianocruz.jim@gmail.com">EMAIL: EMILIANOCRUZ.JIM@GMAIL.COM</a>
                    <br/>
                    <a href="https://instagram.com/emiliano_cj">INSTAGRAM: @EMILIANO_CJ</a>
                    <br/>
                    <a href="mailto:hola@guerxs.com">MODELING BOOKING: HOLA@GUERXS.COM</a>
                </p>
            </div>
            
        </Layout>
    )
}
/*

<div style={{padding: 20, flex: 5, overflowY: 'auto'}}>
                <p>
                    {page1[selected]?.body}
                </p>
            </div>
            
 */

export default withSheets(IndexPage)
