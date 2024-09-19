import { Button, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#353535',
    padding: 15,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFF'
  },
  texts: {
    fontSize: 20,
    color: '#FFF'
  },
  cardsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#b5e550',  // Cor de fundo do botão
    paddingVertical: 10,         // Espaçamento vertical
    paddingHorizontal: 20,       // Espaçamento horizontal
    borderRadius: 5,             // Bordas arredondadas
    alignItems: 'center',        // Centraliza o texto horizontalmente
    justifyContent: 'center',    // Centraliza o texto verticalmente
    marginVertical: 10,          // Margem vertical para separar do conteúdo
  },
  buttonText: {
    color: '#fff',               // Cor do texto
    fontSize: 16,                // Tamanho da fonte
    fontWeight: 'bold',          // Peso da fonte
  },
});

export default styles;