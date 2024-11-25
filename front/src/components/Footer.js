import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>© 2024 My Wireframe Site</p>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '1rem',
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto'
    }
};

export default Footer;
