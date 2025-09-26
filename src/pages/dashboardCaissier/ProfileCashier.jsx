import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Avatar,
  Chip,
  Button,
  IconButton,
  Input,
  Select,
  Option,
  Textarea,
  Switch,
} from "@material-tailwind/react";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarDaysIcon,
  BriefcaseIcon,
  CameraIcon,
  PencilIcon,
  ArrowRightOnRectangleIcon,
  CheckIcon,
  XMarkIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

// Données utilisateur mockées
const mockUser = {
  id: 1,
  firstName: "Marie",
  lastName: "Dupont",
  email: "marie.dupont@email.com",
  phone: "+33 6 12 34 56 78",
  dateOfBirth: "1990-05-15",
  gender: "female",
  address: "123 Rue de la Paix, 75001 Paris, France",
  profession: "Gestionnaire de Restaurant",
  bio: "Passionnée par la restauration avec plus de 8 ans d'expérience dans la gestion d'établissements culinaires.",
  profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
  joinDate: "2022-03-15",
  lastLogin: "2024-01-15T14:30:00Z",
  isActive: true,
  role: "Manager",
  department: "Restauration",
  notifications: {
    email: true,
    sms: false,
    push: true,
  },
  socialLinks: {
    linkedin: "https://linkedin.com/in/mariedupont",
    twitter: "@mariedupont",
  }
};

export default function ProfileCashier() {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...mockUser });

  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser({ ...user });
  };

  const handleSave = () => {
    setUser({ ...editedUser });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  const handleLogout = () => {
    // Logique de déconnexion
    console.log("Déconnexion...");
    // Redirection vers la page de login
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditedUser({ ...editedUser, profileImage: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatLastLogin = (dateString) => {
    return new Date(dateString).toLocaleString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* En-tête avec photo de profil */}
      <Card>
        <CardBody className="text-center">
          <div className="relative inline-block">
            <Avatar
              src={isEditing ? editedUser.profileImage : user.profileImage}
              size="xxl"
              className="border-4 border-white shadow-lg"
            />
            {isEditing && (
              <div className="absolute bottom-0 right-0">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="profile-upload"
                />
                <label htmlFor="profile-upload">
                  <IconButton
                    size="sm"
                    color="blue"
                    className="rounded-full"
                    as="span"
                  >
                    <CameraIcon className="h-4 w-4" />
                  </IconButton>
                </label>
              </div>
            )}
          </div>
          
          <div className="mt-4">
            {isEditing ? (
              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex gap-2">
                  <Input
                    label="Prénom"
                    value={editedUser.firstName}
                    onChange={(e) => setEditedUser({ ...editedUser, firstName: e.target.value })}
                  />
                  <Input
                    label="Nom"
                    value={editedUser.lastName}
                    onChange={(e) => setEditedUser({ ...editedUser, lastName: e.target.value })}
                  />
                </div>
              </div>
            ) : (
              <Typography variant="h4" color="blue-gray">
                {user.firstName} {user.lastName}
              </Typography>
            )}
            
            <div className="flex items-center justify-center gap-2 mt-2">
              <Chip
                variant="gradient"
                color="blue"
                value={user.role}
                className="w-fit"
              />
              <Chip
                variant="gradient"
                color={user.isActive ? "green" : "red"}
                value={user.isActive ? "Actif" : "Inactif"}
                className="w-fit"
              />
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex justify-center gap-2 mt-6">
            {isEditing ? (
              <>
                <Button
                  size="sm"
                  color="green"
                  className="flex items-center gap-2"
                  onClick={handleSave}
                >
                  <CheckIcon className="h-4 w-4" />
                  Sauvegarder
                </Button>
                <Button
                  size="sm"
                  variant="outlined"
                  className="flex items-center gap-2"
                  onClick={handleCancel}
                >
                  <XMarkIcon className="h-4 w-4" />
                  Annuler
                </Button>
              </>
            ) : (
              <Button
                size="sm"
                color="blue"
                className="flex items-center gap-2"
                onClick={handleEdit}
              >
                <PencilIcon className="h-4 w-4" />
                Modifier le profil
              </Button>
            )}
            
            <Button
              size="sm"
              color="red"
              variant="outlined"
              className="flex items-center gap-2"
              onClick={handleLogout}
            >
              <ArrowRightOnRectangleIcon className="h-4 w-4" />
              Se déconnecter
            </Button>
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Informations personnelles */}
        <Card>
          <CardHeader className="pb-4">
            <Typography variant="h5" color="blue-gray" className="flex items-center gap-2">
              <UserIcon className="h-5 w-5" />
              Informations personnelles
            </Typography>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-gray-500" />
                {isEditing ? (
                  <Input
                    label="Email"
                    value={editedUser.email}
                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                    className="flex-1"
                  />
                ) : (
                  <div>
                    <Typography variant="small" color="gray">Email</Typography>
                    <Typography color="blue-gray">{user.email}</Typography>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-gray-500" />
                {isEditing ? (
                  <Input
                    label="Téléphone"
                    value={editedUser.phone}
                    onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                    className="flex-1"
                  />
                ) : (
                  <div>
                    <Typography variant="small" color="gray">Téléphone</Typography>
                    <Typography color="blue-gray">{user.phone}</Typography>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <CalendarDaysIcon className="h-5 w-5 text-gray-500" />
                {isEditing ? (
                  <Input
                    label="Date de naissance"
                    type="date"
                    value={editedUser.dateOfBirth}
                    onChange={(e) => setEditedUser({ ...editedUser, dateOfBirth: e.target.value })}
                    className="flex-1"
                  />
                ) : (
                  <div>
                    <Typography variant="small" color="gray">Âge</Typography>
                    <Typography color="blue-gray">
                      {calculateAge(user.dateOfBirth)} ans ({formatDate(user.dateOfBirth)})
                    </Typography>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <UserIcon className="h-5 w-5 text-gray-500" />
                {isEditing ? (
                  <Select
                    label="Sexe"
                    value={editedUser.gender}
                    onChange={(value) => setEditedUser({ ...editedUser, gender: value })}
                  >
                    <Option value="male">Masculin</Option>
                    <Option value="female">Féminin</Option>
                    <Option value="other">Autre</Option>
                  </Select>
                ) : (
                  <div>
                    <Typography variant="small" color="gray">Sexe</Typography>
                    <Typography color="blue-gray">
                      {user.gender === 'male' ? 'Masculin' : 
                       user.gender === 'female' ? 'Féminin' : 'Autre'}
                    </Typography>
                  </div>
                )}
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-gray-500 mt-1" />
                {isEditing ? (
                  <Textarea
                    label="Adresse"
                    value={editedUser.address}
                    onChange={(e) => setEditedUser({ ...editedUser, address: e.target.value })}
                    className="flex-1"
                  />
                ) : (
                  <div>
                    <Typography variant="small" color="gray">Adresse</Typography>
                    <Typography color="blue-gray">{user.address}</Typography>
                  </div>
                )}
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Informations professionnelles */}
        <Card>
          <CardHeader className="pb-4">
            <Typography variant="h5" color="blue-gray" className="flex items-center gap-2">
              <BriefcaseIcon className="h-5 w-5" />
              Informations professionnelles
            </Typography>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="flex items-center gap-3">
              <BriefcaseIcon className="h-5 w-5 text-gray-500" />
              {isEditing ? (
                <Input
                  label="Profession"
                  value={editedUser.profession}
                  onChange={(e) => setEditedUser({ ...editedUser, profession: e.target.value })}
                  className="flex-1"
                />
              ) : (
                <div>
                  <Typography variant="small" color="gray">Profession</Typography>
                  <Typography color="blue-gray">{user.profession}</Typography>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="h-5 w-5 text-gray-500" />
              <div>
                <Typography variant="small" color="gray">Rôle</Typography>
                <Typography color="blue-gray">{user.role}</Typography>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <UserIcon className="h-5 w-5 text-gray-500" />
              <div>
                <Typography variant="small" color="gray">Département</Typography>
                <Typography color="blue-gray">{user.department}</Typography>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <UserIcon className="h-5 w-5 text-gray-500 mt-1" />
              {isEditing ? (
                <Textarea
                  label="Biographie"
                  value={editedUser.bio}
                  onChange={(e) => setEditedUser({ ...editedUser, bio: e.target.value })}
                  className="flex-1"
                />
              ) : (
                <div>
                  <Typography variant="small" color="gray">Biographie</Typography>
                  <Typography color="blue-gray">{user.bio}</Typography>
                </div>
              )}
            </div>
          </CardBody>
        </Card>

        {/* Statistiques du compte */}
        <Card>
          <CardHeader className="pb-4">
            <Typography variant="h5" color="blue-gray" className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5" />
              Activité du compte
            </Typography>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="flex items-center gap-3">
              <CalendarDaysIcon className="h-5 w-5 text-gray-500" />
              <div>
                <Typography variant="small" color="gray">Membre depuis</Typography>
                <Typography color="blue-gray">{formatDate(user.joinDate)}</Typography>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ClockIcon className="h-5 w-5 text-gray-500" />
              <div>
                <Typography variant="small" color="gray">Dernière connexion</Typography>
                <Typography color="blue-gray">{formatLastLogin(user.lastLogin)}</Typography>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="h-5 w-5 text-gray-500" />
              <div>
                <Typography variant="small" color="gray">Statut du compte</Typography>
                <Chip
                  variant="gradient"
                  color={user.isActive ? "green" : "red"}
                  value={user.isActive ? "Compte actif" : "Compte inactif"}
                  className="w-fit"
                />
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Préférences de notification */}
        <Card>
          <CardHeader className="pb-4">
            <Typography variant="h5" color="blue-gray" className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              Préférences de notification
            </Typography>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Typography color="blue-gray">Notifications par email</Typography>
                <Typography variant="small" color="gray">
                  Recevoir les notifications par email
                </Typography>
              </div>
              <Switch
                checked={isEditing ? editedUser.notifications.email : user.notifications.email}
                onChange={(e) => isEditing && setEditedUser({
                  ...editedUser,
                  notifications: { ...editedUser.notifications, email: e.target.checked }
                })}
                disabled={!isEditing}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Typography color="blue-gray">Notifications SMS</Typography>
                <Typography variant="small" color="gray">
                  Recevoir les notifications par SMS
                </Typography>
              </div>
              <Switch
                checked={isEditing ? editedUser.notifications.sms : user.notifications.sms}
                onChange={(e) => isEditing && setEditedUser({
                  ...editedUser,
                  notifications: { ...editedUser.notifications, sms: e.target.checked }
                })}
                disabled={!isEditing}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Typography color="blue-gray">Notifications push</Typography>
                <Typography variant="small" color="gray">
                  Recevoir les notifications push
                </Typography>
              </div>
              <Switch
                checked={isEditing ? editedUser.notifications.push : user.notifications.push}
                onChange={(e) => isEditing && setEditedUser({
                  ...editedUser,
                  notifications: { ...editedUser.notifications, push: e.target.checked }
                })}
                disabled={!isEditing}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}