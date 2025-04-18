// Creating recipes data file

// Shared recipes data for both listing and detail pages

export interface Recipe {
  id: number;
  title: string;
  category: string;
  region: string;
  difficulty: string;
  time: string;
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  calories?: number;
  image: string;
  description: string;
  ingredients?: string[];
  instructions?: string[];
  tips?: string[];
  relatedRecipes?: {
    id: number;
    title: string;
    image: string;
  }[];
}

export const allRecipes: Recipe[] = [
  {
    id: 1,
    title: 'Käsespätzle',
    category: 'Main Course',
    region: 'Swabian',
    difficulty: 'Medium',
    time: '45 minutes',
    prepTime: '15 minutes',
    cookTime: '30 minutes',
    servings: 4,
    calories: 520,
    image: 'https://www.allrecipes.com/thmb/1uoUaEcDMBFafG8KagshAkA9qT4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KaeseSpaetzle_55224_DDMFS_4x3_2396-b16854ea224b4561af3dbcbe10332b93.jpg',
    description: 'Diese Käsespätzle, auch Käsespätzle genannt, sind eine traditionelle schwäbische hausgemachte Pasta mit Zwiebeln und Emmentaler. Es ist eine deutsche Version von Makkaroni und Käse',
    ingredients: [
      '400g Spätzle (frisch oder getrocknet)',
      '200g Emmentaler Käse, gerieben',
      '100g Gruyère Käse, gerieben',
      '2 große Zwiebeln, dünn geschnitten',
      '3 EL Butter',
      '2 EL Pflanzenöl',
      'Salz und frisch gemahlener schwarzer Pfeffer',
      'Gehackte Schnittlauch zum Garnieren'
    ],
    instructions: [
      'Bei getrockneten Spätzle nach Packungsanweisung kochen. Bei frischen Spätzle in kochendem Salzwasser 2-3 Minuten kochen, bis sie an die Oberfläche steigen. Gut abtropfen lassen.',
      'In der Zwischenzeit Öl und 1 EL Butter in einer großen Pfanne bei mittlerer Hitze erwärmen. Die geschnittenen Zwiebeln hinzufügen und 15-20 Minuten braten, bis sie tief karamellisiert sind, gelegentlich umrühren. Mit Salz und Pfeffer würzen.',
      'Den Ofen auf 180°C vorheizen.',
      'Eine Auflaufform mit Butter einfetten. Eine Schicht Spätzle hinzufügen, gefolgt von etwas geriebenem Käse und karamellisierten Zwiebeln. Diese Schichten wiederholen und mit Käse obenauf abschließen.',
      'Die restliche Butter darüber verteilen und 15-20 Minuten backen, bis der Käse geschmolzen und goldbraun ist.',
      'Heiß servieren, garniert mit gehacktem Schnittlauch.'
    ],
    tips: [
      'Du kannst deine eigenen Spätzle herstellen, wenn du Zeit hast - es ist ein einfacher Teig aus Mehl, Eiern, Wasser und Salz, der durch einen Spätzlehobel oder ein Sieb gedrückt wird.',
      'Für extra Geschmack eine Prise Muskatnuss zu den Käseschichten hinzufügen.',
      'Dieses Gericht wird traditionell mit einem einfachen grünen Salat serviert, um die Reichhaltigkeit auszugleichen.'
    ],
    relatedRecipes: [
      { id: 3, title: 'Brezel', image: 'https://plus.unsplash.com/premium_photo-1692041183959-9faa41c18bda?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=' },
      { id: 4, title: 'Kartoffelsalat', image: 'https://eat.de/wp-content/uploads/2024/11/kartoffelsalat-mit-wuerstchen-1592.jpg' },
      { id: 5, title: 'Bratwurst', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7FIRuBKauJSeb3slp9SrpDgMHx5uwRCE0Q&s0' }
    ]
  },
  {
    id: 2,
    title: 'Lebkuchen',
    category: 'Dessert',
    region: 'Franconian',
    difficulty: 'Easy',
    time: '1 hour',
    prepTime: '20 minutes',
    cookTime: '15 minutes',
    servings: 24,
    calories: 180,
    image: 'https://www.telegraph.co.uk/multimedia/archive/02416/LEBKUCHEN_2416570b.jpg?imwidth=680',
    description: 'Lebkuchen sind eine beliebte Backware, die in Deutschland und vielen anderen Ländern als Snack oder als Beilage zu verschiedenen Gerichten serviert wird.',
    ingredients: [
      '250g Honig',
      '100g brauner Zucker',
      '50g Butter',
      '1 Ei',
      '300g Mehl',
      '1 TL Backpulver',
      '2 EL Lebkuchengewürz (Zimt, Nelken, Anis, Kardamom, Ingwer)',
      '100g gemahlene Mandeln',
      '50g kandierte Orangenschale, fein gehackt',
      '50g kandierte Zitronenschale, fein gehackt',
      'Für die Glasur: 100g Puderzucker, 2 EL Wasser'
    ],
    instructions: [
      'Honig und braunen Zucker in einem Topf erhitzen, bis sich der Zucker auflöst. Leicht abkühlen lassen.',
      'Butter und Ei hinzufügen, gut vermischen.',
      'In einer großen Schüssel Mehl, Backpulver, Gewürzmischung und gemahlene Mandeln vermischen.',
      'Die Honigmischung und die kandierten Fruchtschalen zu den trockenen Zutaten geben und zu einem Teig vermischen.',
      'Abdecken und mindestens 1 Stunde, am besten über Nacht, kühlen.',
      'Den Ofen auf 180°C vorheizen und Backbleche mit Backpapier auslegen.',
      'Den Teig etwa 1 cm dick ausrollen und in Kreise schneiden oder Ausstechformen verwenden.',
      '12-15 Minuten backen, bis die Ränder leicht gebräunt sind.',
      'Für die Glasur Puderzucker mit Wasser vermischen und die Kekse damit bestreichen, während sie noch warm sind.',
      'Vollständig abkühlen lassen, bevor sie in einem luftdichten Behälter aufbewahrt werden.'
    ],
    tips: [
      'Die Kekse werden beim Herausnehmen aus dem Ofen noch recht weich sein, werden aber beim Abkühlen fest.',
      'Für ein traditionelleres Aussehen vor dem Backen Oblaten (dünne Waffeln) unter jeden Keks legen.',
      'Diese Kekse verbessern sich mit der Zeit - bewahre sie für den besten Geschmack eine Woche in einer Dose auf, bevor du sie isst.'
    ],
    relatedRecipes: [
      { id: 3, title: 'Brezel', image: 'https://plus.unsplash.com/premium_photo-1692041183959-9faa41c18bda?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=' },
      { id: 5, title: 'Bratwurst', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7FIRuBKauJSeb3slp9SrpDgMHx5uwRCE0Q&s0' },
      { id: 1, title: 'Käsespätzle', image: 'https://www.allrecipes.com/thmb/1uoUaEcDMBFafG8KagshAkA9qT4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KaeseSpaetzle_55224_DDMFS_4x3_2396-b16854ea224b4561af3dbcbe10332b93.jpg' }
    ]
  },
  {
    id: 3,
    title: 'Brezel',
    category: 'Snack',
    region: 'Swabian',
    difficulty: 'Medium',
    time: '2 hours',
    prepTime: '1 hour 30 minutes',
    cookTime: '15 minutes',
    servings: 8,
    calories: 180,
    image: 'https://plus.unsplash.com/premium_photo-1692041183959-9faa41c18bda?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=',
    description: 'Brezeln sind eine beliebte Backware, die in Deutschland und vielen anderen Ländern als Snack oder als Beilage zu verschiedenen Gerichten serviert wird.',
    ingredients: [
      '500g Brotmehl',
      '7g Trockenhefe',
      '1 EL Zucker',
      '1 1/2 TL Salz',
      '1 EL Pflanzenöl',
      '300ml warmes Wasser',
      'Für das Bad: 1 Liter Wasser, 3 EL Natron',
      '1 Ei, verquirlt (zum Bestreichen)',
      'Grobes Salz zum Bestreuen'
    ],
    instructions: [
      'In einer großen Schüssel Mehl, Hefe, Zucker und Salz mischen.',
      'Öl und warmes Wasser hinzufügen, mischen bis ein Teig entsteht.',
      'Den Teig etwa 10 Minuten kneten, bis er glatt und elastisch ist.',
      'In eine geölte Schüssel geben, abdecken und 1 Stunde gehen lassen, bis er doppelt so groß ist.',
      'Ofen auf 230°C vorheizen und ein Backblech mit Backpapier auslegen.',
      'Den Teig in 8 gleiche Stücke teilen.',
      'Jedes Stück zu einer langen Rolle, etwa 60 cm lang, ausrollen.',
      'Jede Rolle zu einer Brezelform formen: U-Form bilden, die Enden kreuzen, einmal verdrehen und auf den unteren Teil des U legen.',
      'In einem großen Topf Wasser und Natron zum Kochen bringen.',
      'Jede Brezel vorsichtig 30 Sekunden ins kochende Wasser geben, dann auf das Backblech legen.',
      'Mit verquirltem Ei bestreichen und mit grobem Salz bestreuen.',
      '12-15 Minuten backen, bis sie dunkel goldbraun sind.'
    ],
    tips: [
      'Das Natronbad ist wichtig, um den typischen Brezelgeschmack und die dunkle Kruste zu erzielen.',
      'Für weichere Brezeln lasse sie nach dem Formen und vor dem Natronbad weitere 15 Minuten ruhen.',
      'Brezeln schmecken am besten am Tag, an dem sie hergestellt wurden, können aber bis zu 1 Monat eingefroren werden.'
    ],
    relatedRecipes: [
      { id: 1, title: 'Käsespätzle', image: 'https://www.allrecipes.com/thmb/1uoUaEcDMBFafG8KagshAkA9qT4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KaeseSpaetzle_55224_DDMFS_4x3_2396-b16854ea224b4561af3dbcbe10332b93.jpg' },
      { id: 2, title: 'Lebkuchen', image: 'https://www.telegraph.co.uk/multimedia/archive/02416/LEBKUCHEN_2416570b.jpg?imwidth=680' },
      { id: 5, title: 'Bratwurst', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7FIRuBKauJSeb3slp9SrpDgMHx5uwRCE0Q&s0' }
    ]
  },
  {
    id: 4,
    title: 'Kartoffelsalat',
    category: 'Side Dish',
    region: 'Bavarian',
    difficulty: 'Medium',
    time: '1 hour',
    prepTime: '15 minutes',
    cookTime: '20 minutes',
    servings: 6,
    calories: 220,
    image: 'https://eat.de/wp-content/uploads/2024/11/kartoffelsalat-mit-wuerstchen-1592.jpg',
    description: 'Kartoffelsalat ist ein beliebter Salat, der in Deutschland und vielen anderen Ländern als Beilage zu verschiedenen Gerichten serviert wird.',
    ingredients: [
      '1kg festkochende Kartoffeln',
      '1 Zwiebel, fein gewürfelt',
      '3 EL Weißweinessig',
      '150ml warme Gemüse- oder Rinderbrühe',
      '3 EL Pflanzenöl',
      '1 EL Senf',
      'Salz und frisch gemahlener schwarzer Pfeffer',
      '3 EL gehackter Schnittlauch',
      '3 EL gehackte Petersilie',
      '2 Gewürzgurken, fein gewürfelt (optional)'
    ],
    instructions: [
      'Die Kartoffeln mit Schale kochen, bis sie gabelweich sind, etwa 20-25 Minuten je nach Größe.',
      'Abgießen und leicht abkühlen lassen, dann noch warm schälen.',
      'Die Kartoffeln in eine große Schüssel schneiden.',
      'In einer kleinen Schüssel Zwiebel, Essig, warme Brühe, Öl und Senf vermischen.',
      'Die Marinade über die warmen Kartoffeln gießen und vorsichtig vermischen.',
      'Mit Salz und Pfeffer nach Geschmack würzen.',
      'Den Salat für mindestens 30 Minuten, idealerweise einige Stunden oder über Nacht, ziehen lassen.',
      'Vor dem Servieren die frischen Kräuter und ggf. die Gewürzgurken untermischen.',
      'Bei Zimmertemperatur als Beilage zu Würstchen, Schnitzel oder anderen Hauptgerichten servieren.'
    ],
    tips: [
      'Dies ist ein süddeutscher Kartoffelsalat ohne Mayonnaise. Für eine norddeutsche Variante Mayonnaise und gehackte Äpfel hinzufügen.',
      'Durch die Verwendung von warmen Kartoffeln nehmen sie die Marinade besser auf.',
      'Der Geschmack verbessert sich, wenn man den Salat stehen lässt, daher ist dies ein gutes Vorgericht.'
    ],
    relatedRecipes: [
      { id: 1, title: 'Käsespätzle', image: 'https://www.allrecipes.com/thmb/1uoUaEcDMBFafG8KagshAkA9qT4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KaeseSpaetzle_55224_DDMFS_4x3_2396-b16854ea224b4561af3dbcbe10332b93.jpg' },
      { id: 5, title: 'Bratwurst', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7FIRuBKauJSeb3slp9SrpDgMHx5uwRCE0Q&s0' },
      { id: 3, title: 'Brezel', image: 'https://plus.unsplash.com/premium_photo-1692041183959-9faa41c18bda?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=' }
    ]
  },
  {
    id: 5,
    title: 'Bratwurst',
    category: 'Main Course',
    region: 'Baden-Württemberg',
    difficulty: 'Medium',
    time: '1 hour 15 minutes',
    prepTime: '30 minutes',
    cookTime: '45 minutes',
    servings: 4,
    calories: 450,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7FIRuBKauJSeb3slp9SrpDgMHx5uwRCE0Q&s0',
    description: 'Bratwurst ist eine beliebte deutsche Wurst, die typischerweise aus Schweinefleisch hergestellt und auf dem Grill oder in der Pfanne gebraten wird.',
    ingredients: [
      '8 frische Bratwürste',
      '1 große Zwiebel, in Scheiben geschnitten',
      '1 Paprika, in Streifen geschnitten',
      '500ml deutsches Bier (vorzugsweise ein Lagerbier)',
      '2 EL Butter',
      '1 EL Pflanzenöl',
      '1 EL körniger Senf',
      '1 TL Kümmel',
      'Salz und frisch gemahlener schwarzer Pfeffer',
      '4 Brötchen zum Servieren'
    ],
    instructions: [
      'Öl in einer großen Pfanne bei mittlerer Hitze erwärmen.',
      'Die Bratwürste hinzufügen und von allen Seiten anbraten, etwa 5 Minuten.',
      'Zwiebel und Paprika hinzufügen und garen, bis sie weich sind, etwa 5 Minuten.',
      'Das Bier hinzugießen, Kümmel hinzufügen und mit Salz und Pfeffer würzen.',
      'Zum Kochen bringen, dann die Hitze reduzieren, abdecken und etwa 15-20 Minuten köcheln lassen.',
      'Den Deckel abnehmen, die Hitze erhöhen und weiterkochen, bis die Flüssigkeit etwas reduziert und eingedickt ist, etwa 10 Minuten.',
      'Den Senf und die Butter unterrühren.',
      'Die Bratwürste in Brötchen servieren, garniert mit den in Bier geschmorten Zwiebeln und Paprika.'
    ],
    tips: [
      'Für ein authentisches Erlebnis mit Sauerkraut und Kartoffelsalat als Beilage servieren.',
      'Du kannst die Bratwürste auch grillen anstatt sie in der Pfanne zu garen.',
      'Verschiedene Regionen in Deutschland haben ihre eigenen Bratwurstvarianten - probiere Nürnberger, Thüringer oder Frankfurter Stile für Abwechslung.'
    ],
    relatedRecipes: [
      { id: 4, title: 'Kartoffelsalat', image: 'https://eat.de/wp-content/uploads/2024/11/kartoffelsalat-mit-wuerstchen-1592.jpg' },
      { id: 3, title: 'Brezel', image: 'https://plus.unsplash.com/premium_photo-1692041183959-9faa41c18bda?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=' },
      { id: 1, title: 'Käsespätzle', image: 'https://www.allrecipes.com/thmb/1uoUaEcDMBFafG8KagshAkA9qT4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KaeseSpaetzle_55224_DDMFS_4x3_2396-b16854ea224b4561af3dbcbe10332b93.jpg' }
    ]
  }
];

// Helper function to get a recipe by ID
export function getRecipeById(id: number | string): Recipe | undefined {
  // Convert id to number if it's a string
  const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
  return allRecipes.find(recipe => recipe.id === numericId);
}
