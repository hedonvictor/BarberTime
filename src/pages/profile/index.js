import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Importa o useNavigation

const UserProfileScreen = () => {
 
  // Importa a imagem da pasta assets

  const navigation = useNavigation(); // Obtém o objeto de navegação

  const defaultProfilePicture = Asset.fromModule(require('../../assets/cr7.png')).uri;
  const [profileImage, setProfileImage] = useState(Asset.fromModule(require('../../assets/mama.jpeg')).uri);
  const [description, setDescription] = useState('protótipo de tela de perfil do usuário.');
  const [editingDescription, setEditingDescription] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('A permissão para acessar a galeria é necessária!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const setDefaultImage = () => {
    setProfileImage(Asset.fromModule(require('../../assets/mama.jpeg')).uri);
  };

  const handleLogout = () => {
    Alert.alert('Deslogado com sucesso');
  };

  const handleSaveDescription = () => {
    setDescription(newDescription);
    setEditingDescription(false);
  };

  return (
    <LinearGradient
      colors={['#353535', '#1a1a1a']}
      locations={[0, 1]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.profileContainer}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
            <Image
              source={{ uri: profileImage }}
              style={styles.profilePicture}
            />
            <Ionicons
              name="camera-outline"
              size={24}
              color="#fff"
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
          <Text style={styles.userName}>Breno Huchit</Text>

          <View style={styles.descriptionContainer}>
            {editingDescription ? (
              <TextInput
                style={styles.textInput}
                value={newDescription}
                onChangeText={setNewDescription}
                placeholder="Digite sua nova descrição"
                placeholderTextColor="#d3d3d3"
                onSubmitEditing={handleSaveDescription}
              />
            ) : (
              <Text style={styles.userDescription}>{description}</Text>
            )}
            <TouchableOpacity onPress={() => setEditingDescription(!editingDescription)}>
              <Ionicons
                name={editingDescription ? "checkmark-outline" : "pencil-outline"}
                size={24}
                color="#cbea68"
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>E-mail:</Text>
            <Text style={styles.infoValue}>breno@example.com</Text>
            <Text style={styles.infoLabel}>Telefone:</Text>
            <Text style={styles.infoValue}>(11) 98765-4321</Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.editButtonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderColor: '#38761d',
    marginBottom: 10,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#cbea68',
    borderRadius: 50,
    padding: 8,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  userDescription: {
    fontSize: 16,
    color: '#d3d3d3',
    textAlign: 'center',
    paddingHorizontal: 10,
    flex: 1,
  },
  textInput: {
    height: 40,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
    marginRight: 10,
    flex: 1,
  },
  editIcon: {
    marginLeft: 10,
  },
  infoSection: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#fff',
  },
  infoValue: {
    fontSize: 16,
    color: '#d3d3d3',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  logoutButton: {
    backgroundColor: '#cbea68',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    flex: 1,
    justifyContent: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
