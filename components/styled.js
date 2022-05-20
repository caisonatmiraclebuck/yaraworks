import styled from 'styled-components'


const Theme = {
    colors: {
      bg: `#fff`,
      dark: `#24292e`,
      light: `#EEEEEE`,
      red: `#ff5851`,
    },
    fonts: {
      body: `IBM Plex Sans, sans-serif`,
      heading: `IBM Plex Sans, sans-serif`,
    }
  }
  
export  const Navbar = styled.nav`
    background: ${Theme.colors.dark};
    font-family: ${Theme.fonts.heading};
    color: ${Theme.colors.light};
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    a { color: white; text-decoration: none; }`;
  
export  const Brand = styled.a`
    font-weight: bold;
    font-style: italic;
    margin-left: 1rem;
    padding-right: 1rem;`;
export const Container = styled.div`
  padding: 3rem;
`;

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
    margin: 1rem;
`;

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
    height: 325px;
    background: white;
    border-radius: 5%;
    overflow: hidden;
`;

export const CardImage = styled.div`
    width: 100%;
    
    img {
        width:100%;
        height:12rem
    }
`;

export const CardText = styled.div`
    padding: 1rem;
    text-align: center;
    font-weight: 800;

    a{
        color:#24292e;
    }
`;

export const Button = styled.div`
    display:flex;
    justify-content:center;

    button {
        background-color: #24292e; 
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 7px;
        cursor:pointer;
    }
`;

export const SingleUser = styled.div`
    margin: 0 auto;
    width: 25%;
`;

