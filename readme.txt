Voici vos trois prompts finaux, entièrement adaptés et enrichis pour BesmaInfoEnergy — votre site personnel professionnel, hébergé gratuitement, présentant vos compétences et services dans les domaines de l'informatique et de l'énergie en Algérie. Le site est conçu pour être moderne, multilingue (Arabe, Français, Anglais), responsive, et optimisé pour le référencement, tout en restant facile à maintenir et à déployer sur un hébergement gratuit (GitHub Pages, Netlify, Vercel, ou équivalent).

Prompt 1 – Planification enrichie pour BesmaInfoEnergy (site personnel, informatique & énergie, hébergement gratuit)
[Rôle et responsabilité] Vous êtes désormais Staff Software Engineer et Tech Lead. Votre mission est la planification architecturale rigoureuse du projet suivant :

**Projet BesmaInfoEnergy** – Site web personnel professionnel pour un expert en informatique et en énergie en Algérie. Le site sert de vitrine, de portfolio et de plateforme de contact pour proposer des services dans les domaines suivants :

**Informatique** : développement web/mobile, maintenance et dépannage informatique, conseil en systèmes d'information, sécurité informatique, hébergement et cloud, solutions sur mesure.

**Énergie** : énergie solaire (photovoltaïque), efficacité énergétique, audits énergétiques, conseil en économies d'énergie, installation et maintenance d'équipements énergétiques (panneaux solaires, chauffe-eau solaires, etc.).

Le site doit être **hébergé gratuitement** (GitHub Pages, Netlify, Vercel, ou hébergeur solidaire) et présenter une image professionnelle et moderne. Fonctionnalités clés :

**Pages et sections principales :**
- **Accueil** : présentation percutante, valeur ajoutée, appel à l'action (contact, devis).
- **À propos** : votre parcours, vos compétences, vos certifications, votre mission.
- **Services** : présentation détaillée des deux pôles (Informatique & Énergie) avec sous-services (ex : développement web, solaire, audit énergétique).
- **Portfolio / Réalisations** : projets réalisés (informatique et énergie) avec images, descriptions, technologies utilisées, liens éventuels.
- **Blog / Actualités** : articles techniques, conseils, veille technologique et énergétique (ex : "Comment choisir son panneau solaire", "Les bonnes pratiques de cybersécurité").
- **Témoignages / Clients** : avis de clients ou partenaires.
- **Contact** : formulaire de contact (nom, email, téléphone, sujet, message), avec envoi par email (via service de formulaire gratuit) ; affichage des coordonnées (téléphone, email, adresse, réseaux sociaux).
- **FAQ** : questions fréquentes sur vos services (solaire, informatique, etc.).
- **Mentions légales / Politique de confidentialité** : conformité RGPD et obligations légales algériennes.

**EXIGENCES TECHNIQUES ET FONCTIONNELLES :**
- **Hébergement gratuit** : solution statique ou JAMstack (Next.js, Astro, Hugo, ou simple HTML/CSS/JS avec un générateur de site statique).
- **Multilingue** : Arabe, Français, Anglais (basculable via un sélecteur de langue).
- **Design moderne** : élégant, professionnel, avec une palette de couleurs cohérente (ex : bleu/vert pour évoquer l'énergie et la technologie), Dark/Light mode optionnel.
- **Responsive** : s'adapte parfaitement aux mobiles, tablettes, desktops.
- **Performance** : score Lighthouse > 90, temps de chargement < 2 secondes.
- **SEO** : métadonnées optimisées, balises Open Graph, sitemap, robots.txt.
- **Sécurité** : protection des formulaires (CAPTCHA ou honeypot), HTTPS (fourni par l'hébergeur).
- **Contact sans backend** : utilisation de services tiers (Formspree, Netlify Forms, EmailJS, ou Web3Forms) pour l'envoi des emails.

[Règles de pré-planification] Avant les protocoles, appliquez "Think Before Coding" :

- Formulez vos hypothèses sur le positionnement **(ex : cible-t-il les particuliers, les entreprises, ou les deux ?)** .
- Si une exigence est ambiguë **(ex : souhaitez-vous un système de réservation de services en ligne ?)** , arrêtez-vous et demandez des précisions.
- Proposez la solution la plus simple : **un site statique généré par un framework moderne (Astro, Next.js, ou Hugo) + un service de formulaire externe** pour éviter d'avoir à gérer un backend.

[Protocoles obligatoires – Exécution séquentielle]

**Protocole 1 : Conscience temporelle et fiabilité des dépendances**
- Déterminez année/mois via shell. Recherchez les versions stables pour :
  - **Framework** : Astro (recommandé pour sa légèreté) / Next.js / Hugo / Gatsby.
  - **UI** : Tailwind CSS / Bootstrap 5 / une solution maison.
  - **i18n** : Astro i18n / Next-i18next / react-i18next.
  - **Formulaires** : Netlify Forms (si déployé sur Netlify), Formspree, EmailJS, ou Web3Forms.
  - **Animation** : AOS (Animate On Scroll) ou animations CSS personnalisées.
  - **Icônes** : Font Awesome / Lucide / Heroicons.
- Documentez les versions et évitez les versions dépréciées.

**Protocole 2 : Flux logique et périmètre strict (No Feature Creep)**
- Dessinez le parcours utilisateur complet :
  1. **Visiteur** : Arrive sur l'accueil → Parcourt les services → Consulte le portfolio → Lit un article de blog → Accède à la page contact → Envoie un message.
  2. **Client potentiel** : Demande un devis via le formulaire → Reçoit une réponse par email → Devenir client.
  3. **Vous (propriétaire)** : Mettez à jour le blog, ajoutez des projets, modifiez les témoignages via des fichiers (si site statique) ou via un CMS headless (comme Decap CMS ou Tina CMS) selon votre besoin.
- **Ajout** : possibilité d'afficher des "offres spéciales" ou des "promotions" ponctuelles.

**Protocole 3 : Architecture chirurgicale (Surgical Architecture)**
- **Structure du site** :
  - Dossiers : `src/pages` (pages), `src/components` (composants), `src/layouts` (layouts), `src/styles` (CSS), `public` (images, fichiers statiques).
  - Pages : `index.astro` (accueil), `about.astro`, `services.astro`, `portfolio.astro`, `blog/[...slug].astro`, `testimonials.astro`, `contact.astro`, `faq.astro`.
  - Layouts : `BaseLayout.astro` (header, footer, i18n).
- **i18n** : dossiers `src/i18n/` avec des fichiers JSON (ar, fr, en) pour toutes les chaînes.
- **Données** : fichiers JSON ou YAML pour le contenu structuré (services, projets, témoignages), stockés dans `src/data/`.

**Protocole 4 : Stratégie de traçabilité (Safe Logging)**
- Aucun logging côté client nécessaire. Utilisez la console en développement pour déboguer.
- Pour les formulaires, un log de soumission peut être envoyé à votre email (via le service de formulaire).

**Protocole 5 : Établissement de la mémoire externe (PROJECT_MAP.md)**
- Créez `PROJECT_MAP.md` à la racine avec :
  - **TECH_STACK** : framework, UI, i18n, formulaire, déploiement.
  - **SYSTEM_FLOW** : description du parcours utilisateur.
  - **PAGES_STRUCTURE** : liste des pages et leurs composants.
  - **DATA_SCHEMA** : structure des fichiers de données (services, projets, témoignages).
  - **SEO** : stratégie de mots-clés, métadonnées.
  - **DEPLOYMENT** : instructions pour déployer sur GitHub Pages, Netlify, ou Vercel.
  - **ORPHANS & PENDING** : fonctionnalités en attente (ex : version anglaise non encore écrite, intégration d'un mini-portfolio dynamique).

[Livrable attendu] Fournissez les résultats ci-dessus avec un plan d'action (Milestones) basé sur des objectifs vérifiables **(ex : "Page d'accueil affichée avec la présentation et le sélecteur de langue fonctionnel", "Formulaire de contact envoie bien un email à votre adresse", "Le portfolio affiche au moins 3 projets avec images", "Le blog est fonctionnel avec un article de test en arabe, français, anglais")** . Attendez ma validation.

Prompt 2 – Exécution enrichie pour BesmaInfoEnergy (site statique, performance & élégance)
[Délégation de l'exécution continue] Vous êtes Tech Lead responsable de la transformation du plan et de PROJECT_MAP.md en produit final pour BesmaInfoEnergy. Vous avez pleine autorité d'exécution sans interruption.

[Critères d'exécution]
- Simplicité : privilégiez un site statique avec un framework moderne (Astro conseillé) pour des performances optimales.
- **Élégance visuelle** : le design doit être professionnel, épuré, avec une typographie lisible, des espaces blancs bien dosés, et des animations subtiles.
- **Cohérence de marque** : utilisez une palette de couleurs qui évoque l'énergie (vert, orange, bleu) et la technologie (gris, bleu nuit). Créez un logo simple ou utilisez une typographie distinctive.
- **Multilingue** : bascule des langues sans rechargement (ou avec rechargement léger) ; tous les textes traduits.

[Protocoles de travail autonome]

**Protocole 1 : Qualité du code prêt pour la production (Production-Ready)**
- Pas de // TODO. Toutes les chaînes dans des fichiers de traduction (`ar.json`, `fr.json`, `en.json`).
- **Optimisation des images** : utilisez des formats modernes (WebP), des tailles adaptatives (srcset), et le lazy loading.
- **Accessibilité** : balises ARIA, contrastes suffisants, navigation au clavier.
- **SEO** : chaque page doit avoir ses meta-title, meta-description, et une structure de heading (h1, h2, h3) bien hiérarchisée.

**Protocole 2 : Auto-vérification (Loop Until Verified)**
- Testez le site sur Chrome, Firefox, Safari (mobile et desktop).
- Validez le score Lighthouse (Performance, Accessibilité, SEO) > 90.
- Testez l'envoi du formulaire de contact (vérifiez que l'email est bien reçu avec toutes les informations).
- Testez le changement de langue : tous les textes doivent être traduits et adaptés (ex : dates au format local).

**Protocole 3 : Synchronisation d'état (State Sync)**
- Mettez à jour PROJECT_MAP.md au fur et à mesure des sections complétées.
- **Ajoutez une section "Réseaux sociaux"** avec les liens de vos profils professionnels (LinkedIn, GitHub, etc.).

**Protocole 4 : Respect du flux (Flow Adherence)**
- **Le flux principal est la conversion** : le visiteur doit être guidé naturellement de l'accueil vers la page de contact ou de devis.
- **Appels à l'action (CTA)** : placez des boutons "Demander un devis", "Voir les services", "Contactez-moi" à des endroits stratégiques.

**Protocole 5 : Hébergement gratuit et CI/CD (Nouveau)**
- **Choisissez un hébergeur** :
  - **Netlify** : idéal pour les déploiements automatisés depuis Git (drag & drop possible). Les formulaires sont intégrés directement avec Netlify Forms (gratuit).
  - **Vercel** : excellent pour Next.js ou Astro, avec déploiement automatique et previews.
  - **GitHub Pages** : simple et gratuit, mais nécessite un générateur de site statique avec build en local ou via GitHub Actions.
- **Configurez le déploiement** : tous les pushes sur la branche `main` doivent déclencher un déploiement automatique.

**Protocole 6 : Contenus et copywriting (Nouveau)**
- **Rédigez les textes** en vous mettant à la place de vos clients : quels problèmes résolvez-vous ? Pourquoi vous choisir ?
- **Sections "Services"** : décrivez clairement chaque service avec une icône, un titre, une description courte et un lien vers une page dédiée (ou un accordéon).
- **Portfolio** : pour chaque projet, incluez : titre, image, description, technologies/compétences utilisées, lien (si applicable).

[Ordre de lancement] Commencez l'exécution séquentielle. **Priorité absolue** :
1. **Structure du projet** (framework, layout, i18n, styles).
2. **Page d'accueil** (contenu + CTA).
3. **Page "À propos"** (votre bio, compétences, certifications).
4. **Page "Services"** (informatique + énergie).
5. **Page "Portfolio"** (projets).
6. **Page "Blog"** (article de test).
7. **Page "Contact"** (formulaire + coordonnées).
8. **Page "FAQ"** et "Témoignages".
9. **Polishing final** : animations, SEO, tests multi-appareils.
10. **Déploiement** et validation.

**Note additionnelle** : Pour les images, utilisez des banques d'images libres de droits (Unsplash, Pexels) ou vos propres photos. Optimisez-les avec des outils comme Squoosh ou ImageOptim avant de les intégrer.

Prompt 3 – Édition chirurgicale enrichie pour BesmaInfoEnergy (site personnel, contenu et style)
[Rôle et mission] Vous êtes Staff Software Engineer. Intervention chirurgicale sur BesmaInfoEnergy pour la modification suivante (sans endommager l'intégrité du site ni la structure multilingue) :

[Description – ex : "Ajouter un nouveau service : 'Audit énergétique industriel'", "Modifier le texte de la page d'accueil en français", "Ajouter une section 'Partenaires' avec leurs logos", "Corriger le bug de soumission du formulaire de contact", "Ajouter un mode sombre (Dark Mode)"]

[Règles de modification chirurgicale - **renforcées pour un site personnel**]
- **Toutes les modifications de texte doivent être faites dans les fichiers de traduction (JSON)** , jamais directement dans le code HTML.
- **Si vous ajoutez une image ou un fichier, placez-le dans `public/` et référencez-le correctement.**
- **Ne modifiez pas les URLs des pages principales sans mettre en place des redirections (si le site est indexé).**
- **Si vous modifiez le formulaire, testez immédiatement l'envoi d'email.**
- Respectez le style de code existant (framework, CSS).

[Protocole d'analyse et d'exécution]

**Protocole 1 : Analyse d'impact (Impact Analysis)**
- Lisez PROJECT_MAP.md, en particulier les sections "Pages structure" et "Data Schema".
- Identifiez les fichiers concernés :
  - **Textes** : fichiers JSON de traduction.
  - **Nouveaux services** : `src/data/services.json` et les fichiers de traduction.
  - **Formulaire** : `src/pages/contact.astro` ou équivalent.
  - **Styles** : `src/styles/global.css` ou Tailwind config.
- **Vérifiez si la modification impacte le référencement** (ex : nouvelle page ou modification de meta-données).

**Protocole 2 : Intégrité architecturale et abstraction**
- Respectez DRY. **Les nouveaux services doivent être ajoutés dans la structure de données centralisée et réutilisés dans les pages.**
- Si vous modifiez le design (ex : Dark Mode), utilisez une classe CSS `dark` appliquée au `html` ou `body`, et gérez les couleurs via des variables CSS.

**Protocole 3 : Vérification et succès (Goal-Driven)**
- Transformez la modification en objectif vérifiable (ex : "Le service 'Audit énergétique' apparaît dans la liste des services, avec sa description en 3 langues").
- Testez la modification sur toutes les langues.
- **Vérifiez que le formulaire fonctionne toujours** après toute modification du frontend.

**Protocole 4 : Mise à jour de l'état (State Update)**
- Mettez à jour PROJECT_MAP.md : ajoutez la modification dans la section "Évolutions".
- **Si vous avez ajouté du contenu (article, projet), signalez-le pour l'historique.**

**Protocole 5 : Validation métier et image personnelle (Nouveau)**
- **Proposez-moi un scénario de test concret : "Un visiteur arrive sur le site, consulte le nouveau service, puis clique sur 'Demander un devis' et remplit le formulaire. Je reçois bien l'email."**
- **Si la modification est visuelle (ex : changement de couleur), vérifiez que l'identité visuelle reste cohérente et professionnelle.**

[Ordre d'exécution] Exécutez les protocoles en continu. Commencez par l'analyse d'impact et l'énoncé des hypothèses **(ex : "Je suppose que le nouveau service doit apparaître dans l'ordre des services existants, après le service 'solaire'.")** . Puis passez à l'implémentation chirurgicale. **Affichez-moi le diff complet avant d'appliquer les changements, surtout si vous modifiez les fichiers de données ou de configuration.**

✅ Récapitulatif des spécificités de BesmaInfoEnergy (site personnel informatique & énergie)
Aspect	Description pour BesmaInfoEnergy
Type de projet	Site web personnel / professionnel (vitrine)
Domaines d'activité	Informatique (développement, maintenance, conseil) + Énergie (solaire, audits, efficacité énergétique)
Public cible	Particuliers, entreprises, collectivités en Algérie
Hébergement	Gratuit (Netlify, Vercel, GitHub Pages)
Stack technique	Astro / Next.js / Hugo + Tailwind CSS + Netlify Forms / Formspree
Fonctionnalités clés	Présentation des services, portfolio, blog, contact, FAQ, témoignages
Multilingue	Arabe, Français, Anglais
Objectif principal	Générer des leads (demandes de devis / contacts)
Design	Moderne, épuré, cohérent avec l'image "informatique + énergie"
Ces prompts sont désormais prêts à l'emploi dans OpenCode AI pour développer BesmaInfoEnergy. Ils couvrent l'intégralité du périmètre d'un site web professionnel efficace, moderne, multilingue et optimisé pour le référencement, avec un hébergement gratuit et une maintenance simplifiée.