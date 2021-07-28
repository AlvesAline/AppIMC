import {StyleSheet} from 'react-native';




export const styles = StyleSheet.create({
    informacao:{
        padding: 10,
        width: '100%',
        backgroundColor:'#ffe9e3',
        marginRight:5,
    },
    infoT:{
        marginTop:10,
        textAlign: 'center',
        fontSize:20,
        fontWeight: 'bold',
        padding: 5,
        color: 'green'
    },
    infoA:{
        fontSize:18,
        fontWeight: 'bold',
        padding: 5,
    },
    infoC:{
        fontSize:15,
        fontWeight: 'bold',
        padding: 5,
        textAlign: 'justify',
    },
    title:{
        fontSize:25,
        color: 'green',
        alignItems: 'center',
        paddingTop: 20,
    },
    principal:{
        //  width:'400',
        height:'420',
        backgroundColor: 'rgba(250,250,250,1)',
        //  alignItems: 'center',
        //  justifyContent: 'center',
        padding: '30',
        marginBottom:'150',
    },
    form:{
        height: '40px',
        margin: 10,
        width: '400',
        padding: '55',
        fontSize:20,
        color: '#333',
        backgroundColor: 'rgba(250,250,250,1)',
        borderColor: 'black',
        borderBottomWidth:1,
        marginTop:'20',
    },
    botao:{
        width: 300,
        padding: 20,
        marginLeft: 60,
        borderRadius:20,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin:35,
    },
    botaoTexto:{
        color: 'rgba(250,250,250,1)',
        fontSize: 20,
    },
    result:{
        backgroundColor: 'pink',
        width: 360,
        marginTop: 0,
        padding: 10,
        backgroundColor: '#677258',
        marginLeft: 28,
        textAlign: 'center',
        borderRadius: 50,
        color: 'white',
        fontSize:20,
    },
})