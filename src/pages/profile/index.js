import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert, TouchableOpacity, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Asset } from 'expo-asset'; // Importa o Asset para lidar com imagens locais
import { Ionicons } from '@expo/vector-icons'; // Importa os ícones

const UserProfileScreen = () => {
  // Importa a imagem da pasta assets
  const defaultProfilePicture = Asset.fromModule(require('../../assets/mama.jpeg')).uri;
  const [profileImage, setProfileImage] = useState(defaultProfilePicture);

  const pickImage = async () => {
    // Solicita permissão ao usuário para acessar a galeria de imagens
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('A permissão para acessar a galeria é necessária!');
      return;
    }

    // Abre o seletor de imagens
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Atualiza o estado com a URI da imagem selecionada
    }
  };

  const setDefaultImage = () => {
    setProfileImage(defaultProfilePicture); // Define a imagem padrão
  };

  const handleLogout = () => {
    // Lógica para deslogar do aplicativo
    Alert.alert('Deslogado com sucesso');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
          <Image
            source={{ uri: profileImage }} // Mostra a imagem escolhida ou a padrão
            style={styles.profilePicture}
          />
          <Ionicons 
            name="camera-outline" 
            size={24} 
            color="white" 
            style={styles.cameraIcon} 
          />
        </TouchableOpacity>
        <Text style={styles.userName}>Breno Maia da Silva Huchit</Text>
        <Text style={styles.userDescription}>
          vai tomando.
        </Text>

        {/* Seção de informações de contato */}
        <View style={styles.infoSection}>
          <Text style={styles.infoLabel}>E-mail:</Text>
          <Text style={styles.infoValue}>breno@example.com</Text>
          <Text style={styles.infoLabel}>Telefone:</Text>
          <Text style={styles.infoValue}>(11) 98765-4321</Text>
        </View>

        {/* Botão para editar perfil */}
        <TouchableOpacity style={styles.editButton} onPress={() => Alert.alert('Editar perfil')}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>

        {/* Botão para sair */}
        <Button title="Sair" onPress={handleLogout} color="#d9534f" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 40,
  },
  imageWrapper: {
    position: 'relative',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#21349d',
    marginBottom: 10,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#21349d',
    borderRadius: 50,
    padding: 8,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#353535',
    marginBottom: 10,
  },
  userDescription: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  infoSection: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#353535',
  },
  infoValue: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#21349d',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UserProfileScreen;
