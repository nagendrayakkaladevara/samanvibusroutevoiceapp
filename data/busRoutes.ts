import { BusRoute } from '../types/routes';

export const busRoutes: BusRoute[] = [
  {
    id: '1',
    routeNumber: 'QA',
    routeName: 'Quick Actions',
    stops: [
      { id: '1', name: 'Welcome Message', code: '', audioFile: 'route101_stop1.mp3' },
      { id: '2', name: 'Dinner Break', code: '', audioFile: 'route101_stop2.mp3' },
      { id: '3', name: 'Washroom Break', code: '', audioFile: 'route101_stop1.mp3' }
    ]
  },
  {
    id: '1',
    routeNumber: 'HYD',
    routeName: 'Hyderabad City',
    stops: [
      { id: '1', name: 'Choutuppal', code: 'ST001', audioFile: '1.Choutuppal.mp3' },
      { id: '2', name: 'Ramoji Film City', code: 'ST002', audioFile: '2.ramojifilmcity1.mp3' },
      { id: '3', name: 'Hayat Nagar', code: 'ST003', audioFile: '3.hayathnagar.mp3' },
      { id: '4', name: 'Vanasthalipuram', code: 'ST004', audioFile: '4.Vanasthalipuram.mp3' },
      { id: '5', name: 'LB Nagar', code: 'ST005', audioFile: '5.LBnagar.mp3' },
      { id: '6', name: 'Kothapeta', code: 'ST006', audioFile: '6.kothapeta.mp3' },
      { id: '7', name: 'Dilsukhnagar', code: 'ST007', audioFile: '7.dilsuknagar.mp3' },
      { id: '8', name: 'Chaitanyapuri', code: 'ST008', audioFile: '8.chaithanyapuri.mp3' },
      { id: '9', name: 'TV Tower Malakpet', code: 'ST009', audioFile: '9.TVTOWERMALAKPET.mp3' },
      { id: '10', name: 'Koti', code: 'ST010', audioFile: '10.koti.mp3' },
      { id: '11', name: 'Abids', code: 'ST011', audioFile: '11.abids.mp3' },
      { id: '12', name: 'Nampally', code: 'ST012', audioFile: '12.nampally.mp3' },
      { id: '13', name: 'Lakdikapool', code: 'ST013', audioFile: '13.lakdikapool.mp3' },
      { id: '14', name: 'Khairatabad', code: 'ST014', audioFile: '14.khairathabad.mp3' },
      { id: '15', name: 'Panjagutta', code: 'ST015', audioFile: '15.panjaguta.mp3' },
      { id: '16', name: 'Ameerpet', code: 'ST016', audioFile: '16.ameerpet.mp3' },
      { id: '17', name: 'SR Nagar', code: 'ST017', audioFile: '17.srnagar.mp3' },
      { id: '18', name: 'ESI', code: 'ST018', audioFile: '18.ESI.mp3' },
      { id: '19', name: 'Erragadda', code: 'ST019', audioFile: '19.erragada.mp3' },
      { id: '20', name: 'Bharat Nagar', code: 'ST020', audioFile: '20.bharthnaagar.mp3' },
      { id: '21', name: 'Moosapet', code: 'ST021', audioFile: '21.moosapet.mp3' },
      { id: '22', name: 'Kukatpally Metro Station', code: 'ST022', audioFile: '22.kukatpally.mp3' },
      { id: '23', name: 'Vivekananda Nagar Colony', code: 'ST023', audioFile: '23.vivekanandanagar.mp3' },
      { id: '24', name: 'KPHB', code: 'ST024', audioFile: '24.kphb.mp3' },
      { id: '25', name: 'JNTU', code: 'ST025', audioFile: '25.jntu.mp3' },
      { id: '26', name: 'Nizampet', code: 'ST026', audioFile: '26.nizampet.mp3' },
      { id: '27', name: 'Hydernagar', code: 'ST027', audioFile: '27.hydernagar.mp3' },
      { id: '28', name: 'Miyapur', code: 'ST028', audioFile: '28.miyapur.mp3' },
      { id: '29', name: 'Miyapur Allwyn X Road', code: 'ST029', audioFile: '29.miyapurallwynXroad.mp3' },
      { id: '30', name: 'Madinaguda', code: 'ST030', audioFile: '30.madinaguda.mp3' },
      { id: '31', name: 'Gangaram', code: 'ST031', audioFile: '31.gangaram.mp3' },
      { id: '32', name: 'Chandanagar', code: 'ST032', audioFile: '32.chandanagar.mp3' },
      { id: '33', name: 'Lingampally', code: 'ST033', audioFile: '33.lingampally.mp3' },
      { id: '34', name: 'BHEL', code: 'ST034', audioFile: '34.bhel.mp3' }
    ]
  },
  {
    id: '1',
    routeNumber: 'ST-A02',
    routeName: 'HYD - KKD ( Via Mandapeta ) AC',
    stops: [
      { id: '1', name: 'Central Station', code: 'CS001', audioFile: 'route101_stop1.mp3' },
      { id: '2', name: 'City Hall', code: 'CH002', audioFile: 'route101_stop2.mp3' },
      { id: '3', name: 'Business District', code: 'BD003', audioFile: 'route101_stop1.mp3' },
      { id: '4', name: 'Shopping Mall', code: 'SM004', audioFile: 'route101_stop2.mp3' },
      { id: '5', name: 'University', code: 'UN005', audioFile: 'route101_stop1.mp3' }
    ]
  },
  {
    id: '2',
    routeNumber: 'ST-A04',
    routeName: 'HYD - KKD ( Via RJY ) AC',
    stops: [
      { id: '1', name: 'Airport Terminal', code: 'AT001', audioFile: 'route205_stop1.mp3' },
      { id: '2', name: 'Hotel Plaza', code: 'HP002', audioFile: 'route205_stop2.mp3' },
      { id: '3', name: 'Convention Center', code: 'CC003', audioFile: 'route101_stop1.mp3' },
      { id: '4', name: 'Metro Station', code: 'MS004', audioFile: 'route101_stop2.mp3' }
    ]
  },
  {
    id: '3',
    routeNumber: 'ST-A06',
    routeName: 'HYD - KKD ( Via APT ) AC',
    stops: [
      { id: '1', name: 'Beach Resort', code: 'BR001', audioFile: 'route75_stop1.mp3' },
      { id: '2', name: 'Pier Plaza', code: 'PP002', audioFile: 'route75_stop2.mp3' },
      { id: '3', name: 'Boardwalk', code: 'BW003', audioFile: 'route101_stop1.mp3' },
      { id: '4', name: 'Marina', code: 'MA004', audioFile: 'route101_stop2.mp3' },
      { id: '5', name: 'Lighthouse Point', code: 'LP005', audioFile: 'route101_stop1.mp3' }
    ]
  },
  {
    id: '4',
    routeNumber: 'ST-VH02',
    routeName: 'HYD - VSKP AC',
    stops: [
      { id: '1', name: 'Residential Area A', code: 'RA001', audioFile: 'route150_stop1.mp3' },
      { id: '2', name: 'Park & Ride', code: 'PR002', audioFile: 'route150_stop2.mp3' },
      { id: '3', name: 'Shopping Center', code: 'SC003', audioFile: 'route101_stop1.mp3' },
      { id: '4', name: 'Medical Center', code: 'MC004', audioFile: 'route101_stop2.mp3' },
      { id: '5', name: 'School Zone', code: 'SZ005', audioFile: 'route101_stop1.mp3' }
    ]
  },
  {
    id: '5',
    routeNumber: 'ST-12',
    routeName: 'HYD - KKD ( Via Mandapeta ) Non-AC',
    stops: [
      { id: '1', name: 'Vijayawada', code: '', audioFile: '1vijayawada.mp3' },
      { id: '2', name: 'Gannavaram', code: '', audioFile: '2gannavaram.mp3' },
      { id: '3', name: 'Telaprolu', code: '', audioFile: '3telaprolu.mp3' },
      { id: '4', name: 'Veeravalli', code: '', audioFile: '4veeravali.mp3' },
      { id: '5', name: 'Hanuman Junction', code: '', audioFile: '5Hanumanjunction.mp3' },
      { id: '6', name: 'Chebrolu', code: '', audioFile: '6chebrolu.mp3' },
      { id: '7', name: 'Eluru', code: '', audioFile: '7eluru.mp3' },
      { id: '8', name: 'Denduluru', code: '', audioFile: '8denduluru.mp3' },
      { id: '9', name: 'Gundugolanu', code: '', audioFile: '9gundugolunu.mp3' },
      { id: '10', name: 'Bhimadolu', code: '', audioFile: '10bhimadolu.mp3' },
      { id: '11', name: 'Kurellagudem', code: '', audioFile: '11kurrelagudem.mp3' },
      { id: '12', name: 'Pulla', code: '', audioFile: '12pulla.mp3' },
      { id: '13', name: 'Kaikaram', code: '', audioFile: '13kaikaram.mp3' },
      { id: '14', name: 'Narayanapuram', code: '', audioFile: '14narayanapuram.mp3' },
      { id: '15', name: 'Unguturu', code: '', audioFile: '15unguturu.mp3' },
      { id: '16', name: 'Tadepalligudem', code: '', audioFile: '16tpgudem.mp3' },
      { id: '17', name: 'Duvva', code: '', audioFile: '17duva.mp3' },
      { id: '18', name: 'Tanuku', code: '', audioFile: '18tanuku.mp3' },
      { id: '19', name: 'Peravali', code: '', audioFile: '19peravali.mp3' },
      { id: '20', name: 'Annavarapadu', code: '', audioFile: '20annavarapadu.mp3' },
      { id: '21', name: 'Sidhantam', code: '', audioFile: '21sidhantham.mp3' },
      { id: '22', name: 'Ethakota', code: '', audioFile: '22ethakota.mp3' },
      { id: '23', name: 'Ravulapalem', code: '', audioFile: '23ravulapalem.mp3' },
      { id: '24', name: 'Jonnada', code: '', audioFile: '24jonnada.mp3' },
      { id: '25', name: 'Alamuru', code: '', audioFile: '25alamuru.mp3' },
      { id: '26', name: 'Kothuru', code: '', audioFile: '26kothuru.mp3' },
      { id: '27', name: 'Mandapet', code: '', audioFile: '27mandapeta.mp3' },
      { id: '28', name: 'Machavaram', code: '', audioFile: '28Machavaram.mp3' },
      { id: '29', name: 'Ramachandrapuram', code: '', audioFile: '29Ramachandrapuram.mp3' },
      { id: '30', name: 'Draksharamam', code: '', audioFile: '30draksharamam.mp3' },
      { id: '31', name: 'Gollapalem', code: '', audioFile: '31gollapalem.mp3' },
      { id: '32', name: 'Kakinada', code: '', audioFile: '32kakinada.mp3' }
    ]
  },
  {
    id: '6',
    routeNumber: 'ST-122',
    routeName: 'HYD - KKD ( Via APT ) Non-AC',
    stops: [
      { id: '1', name: 'Vijayawada', code: '', audioFile: '1vijayawada.mp3' },
      { id: '2', name: 'Gannavaram', code: '', audioFile: '2gannavaram.mp3' },
      { id: '3', name: 'Hanuman Junction', code: '', audioFile: '3Hanuman junction.mp3' },
      { id: '4', name: 'Eluru', code: '', audioFile: '4eluru.mp3' },
      { id: '5', name: 'Gundugolanu', code: '', audioFile: '5gundugolunu.mp3' },
      { id: '6', name: 'Denduluru', code: '', audioFile: '6denduluru.mp3' },
      { id: '7', name: 'Bhimadolu', code: '', audioFile: '7bhimadolu.mp3' },
      { id: '8', name: 'Dobcherla', code: '', audioFile: '8dobacherla.mp3' },
      { id: '9', name: 'Nalajerlla', code: '', audioFile: '9nallajerla.mp3' },
      { id: '10', name: 'Ananthapalli', code: '', audioFile: '10ananthapalli.mp3' },
      { id: '11', name: 'Yernagudem', code: '', audioFile: '11yerrannagudem.mp3' },
      { id: '12', name: 'Devarapalli', code: '', audioFile: '12devarapali.mp3' },
      { id: '13', name: 'Duddukuru', code: '', audioFile: '13dudhukuru.mp3' },
      { id: '14', name: 'Gowripatnam', code: '', audioFile: '14gowripatnam.mp3' },
      { id: '15', name: 'Pangidi', code: '', audioFile: '15pangidi.mp3' },
      { id: '16', name: 'Kowuru', code: '', audioFile: '16kovuru.mp3' },
      { id: '17', name: 'Rajamundry', code: '', audioFile: '17rajahmundry.mp3' },
      { id: '18', name: 'vemagiri', code: '', audioFile: '18vemagiri.mp3' },
      { id: '19', name: 'Kadiyam', code: '', audioFile: '19kadiyam.mp3' },
      { id: '20', name: 'Kesavaram', code: '', audioFile: '20kesavaram.mp3' },
      { id: '21', name: 'Dwarapudi', code: '', audioFile: '21dwarapudi.mp3' },
      { id: '22', name: 'Anaparthi', code: '', audioFile: '22anaparthi.mp3' },
      { id: '23', name: 'Balabadrapuram', code: '', audioFile: '23balabadrapuram.mp3' },
      { id: '24', name: 'Bikkavolu', code: '', audioFile: '24bikkavolu.mp3' },
      { id: '25', name: 'Pedabrahmadevam', code: '', audioFile: '25peddabrahmadevam.mp3' },
      { id: '26', name: 'Medapadu', code: '', audioFile: '26medapadu.mp3' },
      { id: '27', name: 'Vetlapalem', code: '', audioFile: '27veltlapalem.mp3' },
      { id: '28', name: 'Samarlakota', code: '', audioFile: '28samrlakota.mp3' },
      { id: '29', name: 'Kakinada', code: '', audioFile: '29kakinada.mp3' }
    ]
  },
  {
    id: '7',
    routeNumber: 'ST-PH02',
    routeName: 'HYD - PTP ( Via RJY ) Non-AC',
    stops: [
      { id: '1', name: 'Beach Resort', code: 'BR001', audioFile: 'route75_stop1.mp3' },
      { id: '2', name: 'Pier Plaza', code: 'PP002', audioFile: 'route75_stop2.mp3' },
      { id: '3', name: 'Boardwalk', code: 'BW003', audioFile: 'route101_stop1.mp3' },
      { id: '4', name: 'Marina', code: 'MA004', audioFile: 'route101_stop2.mp3' },
      { id: '5', name: 'Lighthouse Point', code: 'LP005', audioFile: 'route101_stop1.mp3' }
    ]
  }
];