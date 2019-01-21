import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

const ApplicationStyles = {
    screen: {
        mainContainer: {
          flex: 1,
          backgroundColor: Colors.transparent
        },
        backgroundImage: {
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        },
        container: {
            flex: 1,
            paddingTop: Metrics.baseMargin,
            backgroundColor: Colors.transparent
        },
        section: {
          margin: Metrics.section,
          padding: Metrics.baseMargin
        },
        sectionText: {
          ...Fonts.style.normal,
          paddingVertical: Metrics.doubleBaseMargin,
          color: Colors.snow,
          marginVertical: Metrics.smallMargin,
          textAlign: 'center'
        },
        subtitle: {
          color: Colors.snow,
          padding: Metrics.smallMargin,
          marginBottom: Metrics.smallMargin,
          marginHorizontal: Metrics.smallMargin
        },
        titleText: {
          ...Fonts.style.h2,
          fontSize: 14,
          color: Colors.text
        }
    },
    darkLabelContainer: {
        padding: Metrics.smallMargin,
        paddingBottom: Metrics.doubleBaseMargin,
        borderBottomColor: Colors.border,
        borderBottomWidth: 1,
        marginBottom: Metrics.baseMargin
    },
    darkLabel: {
        fontFamily: Fonts.type.bold,
        color: Colors.snow
    },
    groupContainer: {
        margin: Metrics.smallMargin,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    sectionTitle: {
        ...Fonts.style.h4,
        color: Colors.coal,
        backgroundColor: Colors.ricePaper,
        padding: Metrics.smallMargin,
        marginTop: Metrics.smallMargin,
        marginHorizontal: Metrics.baseMargin,
        borderWidth: 1,
        borderColor: Colors.ember,
        alignItems: 'center',
        textAlign: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: Fonts.type.base,
        // margin: Metrics.baseMargin
    },
    welcomeMain: {
        fontSize: 28,
        textAlign: 'center',
        fontFamily: Fonts.type.base,
        margin: Metrics.smallMargin,
        fontWeight: 'bold',
        color: Colors.main,
    },
    myImage: {
        width: 240,
        height: 240,
        alignSelf: 'center'
    },
    navigationButton: {
        backgroundColor: Colors.main,
        padding: Metrics.smallMargin,
        alignSelf: 'center',
        width: 200,
        alignItems: 'center',
        borderRadius: Metrics.buttonRadius,
        marginTop: Metrics.baseMargin
    },
    navigationButtonText: {
        color: Colors.snow
    },


    rectangle: {
        width:150, height:100, backgroundColor: "yellow"
    },
    title:{
        fontSize:20, fontWeight:'bold', textAlign:'center', marginBottom:10
    },
    productItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#f2f2f2',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15
    },
    productItemButton:{
        padding:2,
        backgroundColor: '#107c10',
        borderRadius:5,
        marginTop:5,
        width:90
    },
    deleteProductItemButton:{
        padding:2,
        backgroundColor: '#bf1134',
        borderRadius:5,
        marginTop:5,
        width:90
    },
    productItemButtonText:{
        color: '#f2f2f2',
        textAlign: 'center'
    },
    footer:{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        // backgroundColor: '#000',
        alignItems: 'center'
    },
    addButton:{
        width:40, height:40, borderRadius: 20, backgroundColor: '#107c10', 
        zIndex: 10, marginBottom:-20, alignItems: 'center', justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    scrollContainer:{
        // marginBottom:100
    },
    addButtonText:{
        color:'#fff', fontSize:20
    },
    saveModalBtn:{
        padding:5,
        backgroundColor: '#107c10',
        borderRadius:5,
        width:60,
        alignItems:'center', marginTop:10, marginRight:5
    },
    closeModalBtn:{
        padding:5,
        backgroundColor: '#999',
        borderRadius:5,
        width:70,
        alignItems:'center', marginTop:10
    },
    textInput:{
        padding: 5, borderColor: '#ccc', borderWidth: 1, marginBottom:10
    },
    modal:{
        marginTop:60, backgroundColor:'#f2f2f2', padding:15, shadowColor: '#999',
        shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2
    },
    productTitle: {
        fontSize: 26, marginBottom:5, marginTop:10
    },
    productPrice: {
        marginBottom:5, color: Colors.main, fontSize: 22
    },
    productDesc: {
        padding: 5
    },
    mapContainer: {
        position: 'absolute', bottom: 0, left: 0, right: 0, top: 0, justifyContent: 'flex-end', alignItems: 'center',
        height: 400
    },
    map: {
        position: 'absolute', bottom: 0, left: 0, right: 0, top: 0
    }
}

export default ApplicationStyles
