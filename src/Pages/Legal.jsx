import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ScrollToTop from '../Services/ScrollToTop'

export default function Legal() {
  return (
    <Flex as='section' bg='gray.50' pt={{base:'4', md:'8'}} pb={8} px={{base:'4', md:'8'}} gap={{base:'4', md:'8'}} flexDirection='column'>
      <Heading fontSize='4xl' as='h2' alignSelf={'center'}>Mentions Légales</Heading>
      <Box>
        <Text fontSize='2xl' as='b'>1. PRÉSENTATION DU SITE.</Text>
        <Text>En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site tourspaddlingclub.com l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</Text>
        <Text>Propriétaire : Association Tours Paddling Club – association – Association Tours Paddling Club, lac des Peupleraies 37000 TOURS</Text>
        <Text>Créatrice : Clémence Pham</Text>
        <Text>Responsable publication : Stéphane Moreau – Président de l'association Tours Paddling Club</Text>
        <Text>Le responsable publication est une personne physique ou une personne morale.</Text>
        <Text>Hébergeur : Google - Firebase</Text>
      </Box>
      <Box>
        <Text fontSize='2xl' as='b'>2. CONDITIONS GÉNÉRALES D’UTILISATION DU SITE ET DES SERVICES PROPOSÉS.</Text>
        <Text>L’utilisation du site tourspaddlingclub.com implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site tourspaddlingclub.com sont donc invités à les consulter de manière régulière.</Text>
        <Text>Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par Association Tours Paddling Club, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.</Text>
        <Text>Le site tourspaddlingclub.com est mis à jour régulièrement par Stéphane Moreau. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</Text>
      </Box>
      <Box>
        <Text fontSize='2xl' as='b'>3. DESCRIPTION DES SERVICES FOURNIS.</Text>
        <Text>Le site tourspaddlingclub.com a pour objet de fournir une information concernant l’ensemble des activités de l'association.</Text>
        <Text>L'association Tours Paddling Club s’efforce de fournir sur le site tourspaddlingclub.com des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</Text>
        <Text>Tous les informations indiquées sur le site tourspaddlingclub.com sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site tourspaddlingclub.com ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</Text>
      </Box>
      <Box>
        <Text fontSize='2xl' as='b'>4. LIMITATIONS CONTRACTUELLES SUR LES DONNÉES TECHNIQUES.</Text>
        <Text>Le site utilise la technologie JavaScript.</Text>
        <Text>Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur mis à jour.</Text>
      </Box>
      <Box>
        <Text fontSize='2xl' as='b'>5. PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS.</Text>
        <Text>L'ssociation Tours Paddling Club est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</Text>
        <Text>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : Association Tours Paddling Club.</Text>
        <Text>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</Text>
      </Box>
      <Box>
        <Text fontSize='2xl' as='b'>6. LIMITATIONS DE RESPONSABILITÉ.</Text>
        <Text>L'ssociation Tours Paddling Club ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site tourspaddlingclub.com, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</Text>
        <Text>L'ssociation Tours Paddling Club ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site tourspaddlingclub.com.</Text>
        <Text>Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. Association Tours Paddling Club se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, Association Tours Paddling Club se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).</Text>
      </Box>
      <Box>
        <Text fontSize='2xl' as='b'>7. GESTION DES DONNÉES PERSONNELLES.</Text>
        <Text>En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</Text>
        <Text>A l’occasion de l’utilisation du site tourspaddlingclub.com, peuvent êtres recueillies : l’URL des liens par l’intermédiaire desquels l’utilisateur a accédé au site tourspaddlingclub.com, le fournisseur d’accès de l’utilisateur, l’adresse de protocole Internet (IP) de l’utilisateur.</Text>
        <Text>En tout état de cause l'association Tours Paddling Club ne collecte des informations personnelles relatives à l’utilisateur que pour le besoin de certains services proposés par le site tourspaddlingclub.com. L’utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu’il procède par lui-même à leur saisie. Il est alors précisé à l’utilisateur du site tourspaddlingclub.com l’obligation ou non de fournir ces informations.</Text>
        <Text>Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.</Text>
        <Text>Aucune information personnelle de l’utilisateur du site tourspaddlingclub.com n’est publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l’hypothèse du rachat de l'association Tours Paddling Club et de ses droits permettrait la transmission des dites informations à l’éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l’utilisateur du site tourspaddlingclub.com.</Text>
        <Text>Le site n’est pas déclaré à la CNIL car il ne recueille pas d’informations personnelles.</Text>
        <Text>Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</Text>
      </Box>
      <Box>
        <Text fontSize='2xl' as='b'>8. LIENS HYPERTEXTES ET COOKIES.</Text>
        <Text>Le site tourspaddlingclub.com contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de l'association Tours Paddling Club. Cependant, l'association Tours Paddling Club n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</Text>
        <Text>La navigation sur le site tourspaddlingclub.com est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</Text>
        <Text>Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :</Text>
        <Text>Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l’onglet Options. Cliquer sur l’onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l’historique. Enfin décochez-la pour désactiver les cookies.</Text>
        <Text>Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur Paramètres de contenu. Dans la section « Cookies », vous pouvez bloquer les cookies.</Text>
        <Text>Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur préférences. Dans l’onglet « Confidentialité », vous pouvez bloquer les cookies.</Text>
      </Box>
      <Box>
        <Text fontSize='2xl' as='b'>9. DROIT APPLICABLE ET ATTRIBUTION DE JURIDICTION.</Text>
        <Text>Tout litige en relation avec l’utilisation du site tourspaddlingclub.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</Text>
      </Box>
      <Box>
        <Text fontSize='2xl' as='b'>10. LES PRINCIPALES LOIS CONCERNÉES.</Text>
        <Text>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et aux libertés.</Text>
        <Text>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.</Text>
      </Box>
      <Box>
        <Text fontSize='2xl' as='b'>11. LEXIQUE.</Text>
        <Text>Utilisateur : Internaute se connectant, utilisant le site susnommé.</Text>
        <Text>Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</Text>
      </Box>
      <ScrollToTop />
    </Flex>
  )
}
