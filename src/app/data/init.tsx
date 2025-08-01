import { source } from 'framer-motion/client';
import React from 'react'

export default function init() {
    const cards = [
        {
          id: 1,
          src: "/images/bomb.jpg",
          title: "ក្រុមជំនាញគ្រាប់បែកទម្លាក់ពីយន្តហោះរបស់អង្គភាពសុីម៉ាក់បានស្រាវជ្រាវណ្តៅគ្រាប់បែកផ្ទុះចំនួន៤ទីតាំង",
          description: `
            នៅថ្ងៃទី៣១​ ខែកក្កដា​ ឆ្នាំ២០២៥​ ក្រុមជំនាញគ្រាប់បែកទម្លាក់ពីយន្តហោះរបស់អង្គភាពសុីម៉ាក់បានស្រាវជ្រាវណ្តៅគ្រាប់បែកផ្ទុះចំនួន៤ទីតាំង​ និងគ្រាប់បែកទម្លាក់មកមិនទាន់ផ្ទុះកប់ក្នុងដីចំនួន៥ទីតាំង​ (មានរន្ធគ្រាប់បែក)​។ សូមបញ្ជាក់ថា​ គ្រាប់បែកMK-84 ដែលមិនផ្ទុះ​ និងរណ្តៅគ្រាប់បែកមិនទាន់ផ្ទុះ​ សុទ្ធតែជាគ្រាប់បែកទម្លាក់ថ្មីរបស់កងទ័ពអាកាសសៀម​ ក្នុងសង្គ្រាមរយៈពេល៥ថ្ងៃ២៤-២៨ខែ​កក្កដា​ ឆ្នាំ២០២៥នេះ។  គ្រាប់បែកទាំងនេះគ្មានអ្វីស្មុគស្មាញយល់នោះ​ទេ​ ក្នុងសង្គ្រាមឥណ្ឌូចិនគ្មានការទម្លាក់នៅតំបន់ទាំងនេះទេ​ អង្គភាពសុីម៉ាក់មានព័ត៌មានទិន្នន័យការទម្លាក់គ្រាប់ទាំងនោះ​ ផ្តល់ដោយក្រសួងការបរទេសសហរដ្ឋអាមេរិកយ៉ាងច្បាស់លាស់។ ទន្ទឹងនឹងនេះគ្រាប់បែកត្រកូលMKនេះមានកំណត់សំគាល់និងប្រភពច្បាស់លាស់​ ជាពិសេសទិន្នន័យយន្តហោះF-16និងប្រភេទគ្រាប់បែកដែលបានទម្លាក់សុទ្ធតែមានកំណត់ត្រា​។  យន្តហោះF-16នេះអាចដឹកគ្រាប់បែកMK-84​ចំនួន៤គ្រាប់ក្នុងការទម្លាក់ក្នុង១ជេីង។
    មានបុគ្គលអគតិមួយចំនួនបានលេីកឡេីងថា​ គ្រាប់បែកMK-84នេះ​ជាគ្រាប់បែកចាស់​ សុំបញ្ជាក់ថាករណីគ្រាប់បែកចាស់មានអាយុកាលជាង៥០ឆ្នាំមកហេីយនោះ​ មិនមែនគ្រាន់តែរបកទឹកថ្នាំនោះទេ​ ចែសសុីដែកជ្រៅ​ៗ​ ទន្ទឹងនឹងនេះរណ្តៅគ្រាប់​ផ្ទុះ​ រន្ធរណ្តៅគ្រប់បែកមិនទាន់ផ្ទុះ​ ជាភស្តុតាងស្រាប់​ អ្នកណាសង្ស័យអាចអញ្ជេីញទៅទស្សនាជាក់ស្តែងបាន​ ដោយអាចយកទាំងអ្នកជំនាញអន្តរជាតិខាងគ្រាប់បែកទម្លាក់ពីយន្តហោះលេីពិភពលោកយេីងនេះ មកសិក្សាវាយតម្លៃយ៉ាងហ្មតចត់បាន។ 
    Today 31st July 2025, CMAC’s EOD experts surveyed and identified 9 more bombing locations with 4 bomb exploded creators and 5 unexploded bomb holes. It is to confirm that all, MK-84 bomb, bomb creators and holes were recent (24-28 July war) bombardments dropped by the Thai Air Force.  It is also important to note that CMAC has all Indochinia war’s bombs database which provided by the United States, this database can confirm that there was no bombardments in this area during that war. At the same time, F-16 aircrafts and bombs must be well recorded in terms of flights and bombs used that including bombs serial numbers ….! 
    There were a number of fake news, thus CMAC wishes to invite whoever has a cast in double with new bombs let coming and visiting the bombs and sites, that including international bombs experts.
            `,
            source: "https://web.facebook.com/share/p/1BLaqWqDNC/",
        },
        {
          id: 2,
          src: "/images/qoute1.jpg",
          title: "នៅតែកខ្វល់ខ្វាយ នៅតែចង់ចាំប៉ុន្តែយើងត្រូវតែបន្តទៅមុខ",
          description:
            `
            អរុណសួស្តី ពលរដ្ឋវេទមន្តទាំងអស់គ្នា។ យើងយល់ច្បាស់ហើយថា អ្នកទាំងអស់គ្នាកំពុងស្ថិតនៅក្នុងស្ថានភាពមួយដែលធ្វើឱ្យបងប្អូនមានអារម្មណ៍ស្រ្តេស ឬថប់អារម្មណ៍ ហើយបងប្អូនខ្លះទៀតក៏មានការអស់កម្លាំងផ្លូវចិត្ត។ដូច្នេះ យើងក៏ត្រូវការពេលវេលាសប្បាយមួយរយៈ ខ្លីឬយូក៏ដោយ ដើម្បីព្យាបាលផ្លូវចិត្តដែលកំពុងប្រះស្រាំមួយនេះ។
ពិតណាស់ ស្ថានការមិនទាន់ធូស្បាយនៅឡើយ តែសុខភាពផ្លូវចិត្តរបស់បងប្អូនត្រូវការការសើយសប្បាយ ឬយ៉ាងហោចណាស់ញញឹមបន្តិច ដើម្បីបន្ធូរអារម្មណ៍ផង ដោយមិនប្រកាន់ទុក្ខទោសច្រើនអី។ ហេតុដូច្នេះហើយ ទើបយើង មិនថាខ្ញុំឬអ្នកបង្កើតវេទិការផ្សេងៗទេ គឺខិតខំនាំភាពសប្បាយ រំសាយទុក្ខដល់បងប្អូនទាំងអស់គ្នា។ បងប្អូនជនរួមជាតិមានលទ្ធភាពក្នុងការចូលរួមរំលែកទុក្ខសោកមួយនេះ ជាក់ស្តែងមានបងប្អូនជាច្រើនបានបរិច្ចាគទាំងថវិកា និងកម្លាំងកាយចិត្ត ឯបងប្អូនខ្លះក៏បានចុះទៅកាន់ទីតាំងភាសសឹកផ្ទាល់ទៅសម្តែងល្ខោន កំប្លែថ្លុក និងចម្រៀងជាដើម បង្កើតជាសំណើចនិងស្នាមញញឹមដល់បងប្អូនជនរួមជាតិ។ ជាចុងក្រោយ ទោះជាយ៉ាងណាយើងក៏នៅខ្វល់ខ្វាយ និងនឹករលឹកដល់ប្រជាជន និងមាតុប្រទេសជាទីស្នេហារបស់យើងគ្រប់ៗគ្នា។
Good morning, guys, just another remember to take care of your mental health. I know some of you have been feeling mentally drained, and some have a burnout. So, take some breaks from everything if it helps.
During this stressful time like this when our mental health is completely drained, we should have a little laugh. So, enjoy some laughs without feeling guilty. That’s why I’ve been making memes for you guys to enjoy. Our people bring donations and performances to our victims to bring smiles and laughters to them during this hard time. So, we too should enjoy a little moment of smiles and laughters without feeling guilty. Deep down, we all know that we still care about our people and our country.
            `,
            source: "https://web.facebook.com/share/p/16kugJV16w/"
        },
        {
          id: 3,
          src: "/images/signagreement.jpg",
          title: "ចុះហត្ថលេខាអនុស្សារណៈយោគយល់ជាមួយលោក វេជ្ជបណ្ឌិត ចម្លែក",
          description:
            `
            តំណាងឱ្យ ក្រសួងវេទមន្ត និងមន្តអាគម Ministry of Magic and Sorcery MMS ខ្ញុំបាទមានកិត្តិយសជាតំណាងការទូតចុះហត្ថលេខាអនុស្សារណៈយោគយល់ជាមួយលោក វេជ្ជបណ្ឌិត ចម្លែក ស្ដីពីកិច្ចសហប្រតិបត្តិការអន្តរវិមាត្រ។ កិច្ចការនេះសបញ្ជាក់គោលជំហររបស់ក្រសួងក្នុងការពង្រីកវិសាលភាព និងពង្រឹងទំនាក់ទំនងរវាងមន្រ្តីវេទមន្ត និងអមនុស្សពីវិមាត្រដទៃទៀត។
On behalf of the Ministry of Magic and Sorcery, I am honored as Ambassador to sign a Memorandum of Understanding with Dr. Strange on Interdimensional Cooperation. This work confirms the Ministry's position in expanding the scope and strengthening the relationship between Ministry officials and non-humans from other dimensions.
            `,
            source: "https://web.facebook.com/share/p/15hLpakgN2/"
        },
      ];
  return (
    cards
  )
}
