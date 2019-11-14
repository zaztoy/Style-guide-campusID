export default {
     darkTheme: {
         '& input' : {
             backgroundColor : '#404040',
             color:'#DCDCDC',
             borderBottom : '2px solid #181818',
             padding : '10px',
             borderRadius : '4px',
             boxShadow : '2px 2px 2px 2px rgba(200,200,200,0.6)',
             '&:hover' : {
                backgroundColor : '#505050',
             },
         },
         '& .MuiInput-underline' : {
            '&:after' : {
                borderBottom : '2px solid rgba(197, 0, 0, 6)',
             },
        }
    },
    mediumTheme: {
        '& input' : {
            backgroundColor : '#D3D3D3',
            color:'#404040',
            borderBottom : '2px solid rgba(197, 0, 0, 6)',
            padding : '10px',
            borderRadius : '4px',
            boxShadow : '2px 2px 2px 2px rgba(200,200,200,0.6)',
            '&:hover' : {
               backgroundColor : '#BEBEBE',
            },
        },
        '& .MuiInput-underline' : {
            '&:after' : {
                borderBottom : '2px solid rgba(197, 0, 0, 6)',
             },
        }
    },
    lightTheme: {
        '& input' : {
            backgroundColor : '#F5F5F5',
            color: '#909090',
            borderBottom : '2px solid #D3D3D3',
            padding : '10px',
            borderRadius : '4px',
            boxShadow : '2px 2px 2px 2px rgba(200,200,200,0.6)',
            '&:hover' : {
               backgroundColor : '#E0E0E0',
            },
        },
        '& .MuiInput-underline' : {
            '&:after' : {
            borderBottom : '2px solid rgba(197, 0, 0, 6) !important',
             },
        }
    }
}