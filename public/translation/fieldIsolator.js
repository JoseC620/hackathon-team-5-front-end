/*
https://data.cityofnewyork.us/resource/e4ej-j6hn.json

Following functions are not referenced elsewhere.

(But the functions are used to generate data that is referenced.)

Following code is example of taking array of objects and key of object, and isolating
fields to translate on that basis.
*/

const rawData = [
    {
      "name": "Tremont Park",
      "location": "Arthur Avenue & East Tremont Avenue",
      "type": "Bocce Courts"
    },
    {
      "name": "Ferry Point Park",
      "location": "Corner of Balcom Avenue and Dewey Avenue",
      "type": "Basketball Courts"
    },
    {
      "name": "Franz Sigel Park",
      "location": "E 153 St. & Grand Concourse",
      "type": "Basketball Courts"
    },
    {
      "name": "Gun Hill Playground",
      "location": "Holland Ave. & Magenta St.",
      "type": "Basketball Courts"
    },
    {
      "name": "Macombs",
      "location": "E 158th St. & Ruppert Plaza",
      "type": "Basketball Courts"
    },
    {
      "name": "Sound View Park",
      "location": "Bronx River & Lafayette Aves.",
      "type": "Basketball Courts"
    },
    {
      "name": "St. James Park",
      "location": "E 193 St. & Jerome Ave.",
      "type": "Basketball Courts"
    },
    {
      "name": "Alex Lindower Park",
      "location": "Mill & Strickland Aves.",
      "type": "Basketball Courts"
    },
    {
      "name": "Bensonhurst Park",
      "location": "Gravesend Bay, 21 Ave., Cropsey Ave. and Bay Pkwy.",
      "type": "Basketball Courts"
    },
    {
      "name": "Dyker Beach Park",
      "location": "Shore Pkwy., 86 St. and 7 to 14 Aves.",
      "type": "Basketball Courts"
    },
    {
      "name": "Leon S. Kaiser Playground",
      "location": "Coney Island Creek and W 24 St.",
      "type": "Basketball Courts"
    },
    {
      "name": "Marine Park/PS 278",
      "location": "Fillmore Ave. & Madison Pl.",
      "type": "Basketball Courts"
    },
    {
      "name": "J. Hood Wright Playground (*Under Construction)",
      "location": "176 St. & Ft. Washington Ave.",
      "type": "Basketball Courts"
    },
    {
      "name": "Morningside Park",
      "location": "W. 113 St. & Morningside",
      "type": "Basketball Courts"
    },
    {
      "name": "Morningside Park",
      "location": "W. 116 St. & Morningside",
      "type": "Basketball Courts"
    },
    {
      "name": "Morningside Park",
      "location": "W. 123 St. & Morningside",
      "type": "Basketball Courts"
    },
    {
      "name": "Sara D. Roosevelt Park (A)",
      "location": "Stanton St.",
      "type": "Basketball Courts"
    },
    {
      "name": "Sara D. Roosevelt Park (B)",
      "location": "Delancey St. between Forsythe and Christie Sts.",
      "type": "Basketball Courts"
    },
    {
      "name": "Sara D. Roosevelt Park (D)",
      "location": "Canal to Hester Sts.",
      "type": "Basketball Courts"
    },
    {
      "name": "Francis Lewis Park",
      "location": "3 Ave., 147 St. and E River",
      "type": "Basketball Courts"
    },
    {
      "name": "Joseph P. Addabbo Playground",
      "location": "North Conduit Ave. between 81 and 82 Sts.",
      "type": "Basketball Courts"
    },
    {
      "name": "MacNeil Park",
      "location": "Poppenhusen Ave. and 119 St.",
      "type": "Basketball Courts"
    },
    {
      "name": "FDR Boardwalk & Beach",
      "location": "Miller Field & Greely Ave.",
      "type": "Basketball Courts"
    },
    {
      "name": "Crotona Park",
      "location": "E. 173d St. and Crotona Ave.",
      "type": "Tennis Courts"
    },
    {
      "name": "Haffen Park",
      "location": "Hammersley, Ely & Gunther Aves.",
      "type": "Tennis Courts"
    },
    {
      "name": "St. James Park",
      "location": "Jerome Ave. and E. 193d St.",
      "type": "Tennis Courts"
    },
    {
      "name": "St. Mary's Park",
      "location": "E. 145 St. and St. Ann's Ave.",
      "type": "Tennis Courts"
    },
    {
      "name": "Van Cortlandt Park",
      "location": "Stadium - W. 242nd St. and Broadway",
      "type": "Tennis Courts"
    },
    {
      "name": "Van Cortlandt Park",
      "location": "Woodlawn, W. 233rd St. & Jerome Ave.",
      "type": "Tennis Courts"
    },
    {
      "name": "Lucille Ferrera Tennis Courts (Dyker Beach Park)",
      "location": "Cropsey Avenue, Bay 8th Street and Poly Place",
      "type": "Tennis Courts"
    },
    {
      "name": "Friends Field",
      "location": "Ave. L & East 4th St.",
      "type": "Tennis Courts"
    },
    {
      "name": "Joseph T. McGuire Park",
      "location": "Avenue W and Bergen",
      "type": "Tennis Courts"
    },
    {
      "name": "Kaiser Playground",
      "location": "Neptune Ave. & W. 25th St.",
      "type": "Tennis Courts"
    },
    {
      "name": "Manhattan Beach",
      "location": "Oriental Blvd.",
      "type": "Tennis Courts"
    },
    {
      "name": "Marine Park",
      "location": "Fillmore Ave. & Stuart St.",
      "type": "Tennis Courts"
    },
    {
      "name": "McKinley Park",
      "location": "7th Ave. & 75th St.",
      "type": "Tennis Courts"
    },
    {
      "name": "Inwood Hill Park",
      "location": "207th St. and Seaman Ave.",
      "type": "Tennis Courts"
    },
    {
      "name": "Riverside Park",
      "location": "Riverside Drive and W. 119th St.",
      "type": "Tennis Courts"
    },
    {
      "name": "Crocheron Park",
      "location": "215th Place & 33rd Ave.",
      "type": "Tennis Courts"
    },
    {
      "name": "Det. Keith L. Williams Park",
      "location": "Liberty Ave. & 173rd St.",
      "type": "Tennis Courts"
    },
    {
      "name": "Forest Park",
      "location": "Park Lane South & 89th St.",
      "type": "Tennis Courts"
    },
    {
      "name": "Kissena Park",
      "location": "Rose & Oak Aves.",
      "type": "Tennis Courts"
    },
    {
      "name": "Kissena Park",
      "location": "Rose & Oak Aves.",
      "type": "Tennis Courts"
    },
    {
      "name": "Flushing Meadows Corona Park",
      "location": "Flushing Meadows Corona Park",
      "type": "Tennis Courts"
    },
    {
      "name": "Willowbrook Park",
      "location": "Richmond Ave. & Eton Place",
      "type": "Tennis Courts"
    },
    {
      "name": "PARK STRIP",
      "location": "W/s Gowanus Pkwy, 81 & 82 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Wolfes Pond Park",
      "location": "Cornelia Ave., off of Highland Blvd.",
      "type": "Tennis Courts"
    },
    {
      "name": "Patterson Playground",
      "location": "Morris Avenue, East 148 Street, College Avenue, East 145 Street",
      "type": "Football Fields"
    },
    {
      "name": "Betsy Head Memorial Playground",
      "location": "Livonia, Dumont, Hopkinson, Blake avenues, Strauss Street",
      "type": "Football Fields"
    },
    {
      "name": "St. Vartan Playground",
      "location": "1 to 2 avenues, East 35 to East 36 streets",
      "type": "Football Fields"
    },
    {
      "name": "Forest Park",
      "location": "Victory Field",
      "type": "Football Fields"
    },
    {
      "name": "World Ice Arena",
      "location": "125-40 Roosevelt Avenue",
      "type": "Ice Skating Rinks"
    },
    {
      "name": "Bensonhurst Park",
      "location": "BAY PKWY & CROPSEY AVENUE",
      "type": "Playgrounds"
    },
    {
      "name": "Betsy Head Memorial Playground",
      "location": "DUMONT AVE & BRISTOL ST",
      "type": "Playgrounds"
    },
    {
      "name": "Brower Park",
      "location": "BROOKLYN AVE & PROSPECT PL",
      "type": "Playgrounds"
    },
    {
      "name": "Brower Park",
      "location": "BROOKLYN AVE & PROSPECT PL",
      "type": "Playgrounds"
    },
    {
      "name": "Maria Hernandez Park",
      "location": "KNICKERBOCKER ST ENTRANCE",
      "type": "Playgrounds"
    },
    {
      "name": "Dinapoli Playground",
      "location": "E. 92 ST, SEAVIEW AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Carroll Park",
      "location": "Carroll, Court, President, Smith Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Commodore Barry Park",
      "location": "Park Ave, Navy St, Flushing Ave, N Eliot Pl",
      "type": "Playgrounds"
    },
    {
      "name": "Middleton Playground",
      "location": "Lynch, Middleton Sts, Lee Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Lafayette Playground",
      "location": "Lafayette Ave, E/o Malcolm X Blvd",
      "type": "Playgrounds"
    },
    {
      "name": "Bay 8 Playground",
      "location": "CROPSEY & BAY 8",
      "type": "Playgrounds"
    },
    {
      "name": "Dyker Playground",
      "location": "14 AVE & 86 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Fort Greene Playground",
      "location": "MYRTLE AVE & ST EDWARDS PLAZA",
      "type": "Playgrounds"
    },
    {
      "name": "Fort Greene Park",
      "location": "DEKALB AVE & CUMBERLAND ST",
      "type": "Playgrounds"
    },
    {
      "name": "Gravesend Park",
      "location": "18 AVE & 56 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Greenpoint Park",
      "location": "Commercial, Franklin, Dupont Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Van Voorhees Park",
      "location": "Congress, Columbia, Pacific, Hicks Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Wm E Kelly Memorial Park",
      "location": "Ave S, E 14 & E 8 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Leif Ericson Park",
      "location": "4TH AVE TO CS ADJ 5TH AVE, BTWN 66TH AND 67TH STREET",
      "type": "Playgrounds"
    },
    {
      "name": "Dr Martin Luther King Jr Park",
      "location": "Dumont, Blake, Miller Aves, Bradford St",
      "type": "Playgrounds"
    },
    {
      "name": "Ps 278 Playground",
      "location": "FILLMORE AVE, MADISON PL",
      "type": "Playgrounds"
    },
    {
      "name": "Lenape  Playground",
      "location": "S/O AVE U & E 38 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Dr John's Playground",
      "location": "GERRITSEN AVE & AVE X",
      "type": "Playgrounds"
    },
    {
      "name": "Vincent V Abate Playground",
      "location": "LORIMER ST, DRIGGS AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Mckinley Park",
      "location": "73-75 STS, FT HAMILTON PKWY",
      "type": "Playgrounds"
    },
    {
      "name": "Owls Head Park",
      "location": "67 ST & COLONIAL RD, NORTH OF B066-02",
      "type": "Playgrounds"
    },
    {
      "name": "Owls Head Park",
      "location": "NR ENT @ COLONIAL RD/67 ST, SOUTH OF B066-01",
      "type": "Playgrounds"
    },
    {
      "name": "Third St Playground",
      "location": "4 ST & PROSPECT PK W",
      "type": "Playgrounds"
    },
    {
      "name": "Garfield Tot Lot",
      "location": "WEST DRIVE OPP GARFIELD PL",
      "type": "Playgrounds"
    },
    {
      "name": "Vanderbilt Playground",
      "location": "PROSPECT PK S/W, VANDERBILT ST",
      "type": "Playgrounds"
    },
    {
      "name": "Imagination Playground",
      "location": "OCEAN AVE & E LAKE DR",
      "type": "Playgrounds"
    },
    {
      "name": "Lincoln Rd Playground",
      "location": "LINCOLN RD & OCEAN AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Harmony Playground",
      "location": "11 ST & PROSPECT PARK W",
      "type": "Playgrounds"
    },
    {
      "name": "Coffey Park",
      "location": "KING, RICHARDS & DWIGHT STS",
      "type": "Playgrounds"
    },
    {
      "name": "Grace Playground",
      "location": "Belmont & Pitkins Aves, Vermont & New Jersey Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Saratoga Square Park",
      "location": "Macon St, Howard Ave, Halsey St, Saratoga Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Asser Levy Playground",
      "location": "SURF AVE & 5 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Vinland Playground",
      "location": "95 ST & SHORE ROAD",
      "type": "Playgrounds"
    },
    {
      "name": "79 St Playground",
      "location": "79 ST & SHORE RD",
      "type": "Playgrounds"
    },
    {
      "name": "Sunset Park",
      "location": "6 AVE BET 41 & 44 STS",
      "type": "Playgrounds"
    },
    {
      "name": "Herbert Von King Park",
      "location": "W/O TOMPKINS AVE, E/O MARCY AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Weeksville Playground",
      "location": "Atlantic, Howard Aves, Herkimer St",
      "type": "Playgrounds"
    },
    {
      "name": "Sgt William Dougherty Playground",
      "location": "Anthony St, Vandervoort Ave, Cherry St",
      "type": "Playgrounds"
    },
    {
      "name": "Sledge Playground",
      "location": "E 95 St Bet Aves K & L",
      "type": "Playgrounds"
    },
    {
      "name": "Martin Luther Playground",
      "location": "55 To 56 Sts, 2 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Lt Joseph Petrosino Park",
      "location": "New Utrecht To 16 Aves, 70 To 71 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Seth Low Playground",
      "location": "AVE P, BAY PKWY, W 12 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Crispus Attucks Playground",
      "location": "Classon Ave, Fulton St, Irving Pl",
      "type": "Playgrounds"
    },
    {
      "name": "Lions' Pride Playground",
      "location": "Riverdale, Van Sinderen, Livonia, Snediker Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Bill Brown Memorial Playground",
      "location": "Bedford Ave, Ave X To Ave Y, E 24 St",
      "type": "Playgrounds"
    },
    {
      "name": "Washington Park",
      "location": "3 To 4 Sts, 4 To 5 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Monsignor Mcgolrick Playground",
      "location": "NASSUA  AVE BET MONITOR ST & RUSSELL ST",
      "type": "Playgrounds"
    },
    {
      "name": "St Mary's Playground",
      "location": "Smith St Bet Nelson & Huntington Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Dodger Playground",
      "location": "Sullivan Pl W/o Nostrand Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Calvert Vaux",
      "location": "BAY 44 & CROPSEY AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Bush Clinton Park",
      "location": "LORRAINE, CLINTON, HENRY STS",
      "type": "Playgrounds"
    },
    {
      "name": "Col David Marcus Mem Playground",
      "location": "Ocean Pkwy, Ave P, E 3 St",
      "type": "Playgrounds"
    },
    {
      "name": "Greenwood Playground",
      "location": "Ft Hamilton Pkwy, Prospect Ave, Greenwood Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Rudd Playground",
      "location": "Bushwick Ave, Aberdeen St, Granite St",
      "type": "Playgrounds"
    },
    {
      "name": "Bedford Playground",
      "location": "Bedford Ave & S 9 St, Division Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Thomas Greene Playground",
      "location": "3 Ave, Nevins, Degraw & Douglas Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Rolf Henry Playground",
      "location": "New York & Clarkson Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Linwood Playground",
      "location": "Linwood St, New Lots & Hegeman Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Paul W Kolbert Playground",
      "location": "Ave L, E 17 To E 18 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Rappaport Playground",
      "location": "Ft Hamilton Pkwy, 10 Ave, 52 To 53 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "South Pacific Playground",
      "location": "W/s Howard Ave, Pacific To Dean Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Powell Playground",
      "location": "Sackman To Powell Sts Bet Glenmore & Pitkin Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Kelly Playground",
      "location": "N/s Ave S Bet Bmt & Ps 255",
      "type": "Playgrounds"
    },
    {
      "name": "Garibaldi Playground",
      "location": "82 To 83 St At 18 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Mt Prospect Park",
      "location": "EASTERN PKWY BETWEEN WASHINGTON AVE & FLATBUSH AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Nicholas A. Brizzi Playground",
      "location": "42 To 43 Sts, 10 To New Utrecht Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Sperandeo Brothers Playground",
      "location": "Atlantic Ave, Elton To Linwood Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Bath Beach Playground",
      "location": "Shore Pkwy & 17 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Homecrest Playground",
      "location": "Shore Pkwy To Williams Ct, E 12 St",
      "type": "Playgrounds"
    },
    {
      "name": "Brighton Playground",
      "location": "W/s Brighton 2 St At Boardwalk",
      "type": "Playgrounds"
    },
    {
      "name": "Russell Pederson Playground",
      "location": "Colonial Rd, 83 To 85 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Hamilton Metz Field",
      "location": "Albany, East New York, Lefferts Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Mellett Playground",
      "location": "Ave V, E 13 St & E 14 St",
      "type": "Playgrounds"
    },
    {
      "name": "Fulton Park East",
      "location": "Stuyvesant Ave & Marion St",
      "type": "Playgrounds"
    },
    {
      "name": "Sunners Playgournd",
      "location": "Ave H, Kings Highway & E 49 St",
      "type": "Playgrounds"
    },
    {
      "name": "Sarsfield Playground",
      "location": "E 38 St & Ryder St",
      "type": "Playgrounds"
    },
    {
      "name": "Pfc Thomas Norton Mem Playground",
      "location": "Nostrand Ave & Ave P, Kings Highway",
      "type": "Playgrounds"
    },
    {
      "name": "Joe Galapo Playground",
      "location": "Bedford Ave & Gravesend Neck Rd, Ave V, E 24 St",
      "type": "Playgrounds"
    },
    {
      "name": "Admiral Playground",
      "location": "Clinton St, Nelson St, Hamilton Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Ps 1 Playground",
      "location": "46 & 47 Sts, 3 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "John J Carty Park",
      "location": "FT HAMILTON PKWY, 94-95 STS",
      "type": "Playgrounds"
    },
    {
      "name": "Hot Spot Tot Lot",
      "location": "Campus Rd, E 21 St & Ave H",
      "type": "Playgrounds"
    },
    {
      "name": "Israel Putnam",
      "location": "M Garvey Blvd, Madison To Monroe Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Paerdegat Park",
      "location": "Foster Ave & Farragut Rd, E 40 St, Albany Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Callahan-kelly Playground",
      "location": "Fulton,truxton Sts, Van Sinderen Ave,eastern Pkwy",
      "type": "Playgrounds"
    },
    {
      "name": "Washington Hall Park",
      "location": "Park, Washington Aves To Hall St",
      "type": "Playgrounds"
    },
    {
      "name": "Steuben Playground",
      "location": "Flushing, Steuben St, Bklyn Queens Exwy",
      "type": "Playgrounds"
    },
    {
      "name": "Dimattina Playground",
      "location": "Rapelye, Hicks, Coles St",
      "type": "Playgrounds"
    },
    {
      "name": "Palmetto Playground",
      "location": "Atlantic Ave, Columbia, State Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Harry Chapin Park",
      "location": "Columbia Hts, Middagh, Cranberry & Willow Sts",
      "type": "Playgrounds"
    },
    {
      "name": "PARK",
      "location": "Jay, York, Prospect, Bridge Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Penn Triangle",
      "location": "Penn St & Wythe Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Rodney Playground South",
      "location": "Rodney, S 3 & S 4 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Jaime Campiz Playground",
      "location": "Hope St, Marcy, Metropolitan Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Plce Ofcr Reinaldo Salgado Playground",
      "location": "Monroe To Madison Sts, Patchen & Ralph Aves",
      "type": "Playgrounds"
    },
    {
      "name": "St Andrew's Playground",
      "location": "Atlantic Ave, Herkimer St, Kingston Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Gowanus Playground",
      "location": "Hoyt, Wyckoff, Bond Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Dean Playground",
      "location": "Dean To Bergen Sts Bet 6 & Carlton Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Tilden Playground",
      "location": "Tilden Ave, E 48 To E 49 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Dolgon Playground",
      "location": "Ave V, Nostrand & Batchelder Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Glenwood Playground",
      "location": "Ralph Ave & Farragut Rd",
      "type": "Playgrounds"
    },
    {
      "name": "Hancock Playground",
      "location": "BEDFORD AVE, HANCOCK ST, JEFFERSON AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Sheepshead Playground",
      "location": "Ave Z, Nostrand Ave To E 29 St",
      "type": "Playgrounds"
    },
    {
      "name": "Mcdonald Playground",
      "location": "Mcdonald Ave, Bet Aves S & T",
      "type": "Playgrounds"
    },
    {
      "name": "Breukelen  Playground",
      "location": "LOUISIANA & FLATLANDS AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Fox Playground",
      "location": "Aves H & I, E 54 To E 55 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Van Dyke Playground",
      "location": "Dumont Ave, Powell St",
      "type": "Playgrounds"
    },
    {
      "name": "Nostrand Playground",
      "location": "Nostrand & Foster Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Pat Perlato Playground.",
      "location": "FALMOUTH ST & ORIENTAL AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Manhattan Beach Park",
      "location": "MACKENZIE & ORIENTAL AVES",
      "type": "Playgrounds"
    },
    {
      "name": "West Playground",
      "location": "N/s Ave Z Bet West St & W 1 St",
      "type": "Playgrounds"
    },
    {
      "name": "Parham Playground",
      "location": "Adelphi St, Clermont, Dekalb, Willoughby Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Wingate Park",
      "location": "S E Corner Brooklyn Ave & Rutland Rd",
      "type": "Playgrounds"
    },
    {
      "name": "Frost Playground",
      "location": "Frost St, Kingsland & Morgan Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Brevoort Playground",
      "location": "W/s Ralph Ave Bet Sumpter & Chauncey Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Underwood Park",
      "location": "Lafayette & Washington Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Howard Playground & Pool",
      "location": "Glenmore & Mother Gaston Blvd",
      "type": "Playgrounds"
    },
    {
      "name": "Schenck Playground",
      "location": "Livonia Ave, Barbey St & Schenck Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Sumner Playground",
      "location": "M Garvey Blvd, Throop, Park & Myrtle Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Roebling Playground",
      "location": "Wilson & Lee Aves, Taylor St, Bedford Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Rainbow Park",
      "location": "55 & 56 Sts At 6 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Star Spangled Playground",
      "location": "Franklin Ave Bet Willoughby & Dekalb Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Parkside Playground",
      "location": "Rogers Ave, Winthrop St, Parkside Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Nautilus Playground",
      "location": "Public Beach, W 29 & W 32 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Jesse Owens Playground",
      "location": "Stuyvesant & Lafayette Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Ditmas Playground",
      "location": "Ditmas Ave Bet E 91 & E 92 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Marlboro Playground",
      "location": "W 11 St & Ave W",
      "type": "Playgrounds"
    },
    {
      "name": "Bay View",
      "location": "S/s Seaview Ave Opp E 99 St",
      "type": "Playgrounds"
    },
    {
      "name": "Benson Playground",
      "location": "Bath Ave Bet Bay 22 & Bay 23 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Patrick O’Rourke Park ",
      "location": "80 To 81 Sts, 11 To 12 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Belmont Playground",
      "location": "Pitkin Ave, Drew St, Belmont, N Conduit Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Harry Maze Playground",
      "location": "Ave D Bet E 56 & E 57 St",
      "type": "Playgrounds"
    },
    {
      "name": "Bartlett Playground",
      "location": "Bartlett St & Throop Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Power Playground",
      "location": "Ave N & Utica Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Pratt Playground",
      "location": "Willoughby Ave, Emerson Pl",
      "type": "Playgrounds"
    },
    {
      "name": "Classon Playground",
      "location": "Lafayette & Classon Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Jackie Robinson Park",
      "location": "Reid St Bet Chauncey And Marion Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Oxport Playground",
      "location": "Flushing Ave, N Portland Ave & N Oxford St",
      "type": "Playgrounds"
    },
    {
      "name": "Luna Park Playground",
      "location": "Surf Ave, W 8 St To W 12 St",
      "type": "Playgrounds"
    },
    {
      "name": "Oracle Playground",
      "location": "Adelphi & Myrtle Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Greene Playground",
      "location": "Greene Ave Bet Waverly & Washington Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Charlie's Place",
      "location": "Hopkins To Ellery Streets, Tomkins To Throop Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Kennedy-king Playground",
      "location": "Lenox Rd, Clarkson Ave, E 93 & E 94 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Ps 286 Playground",
      "location": "Ave Y, Bet Brown & Haring Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Tiger Playground",
      "location": "Evergreen Ave, Eldert & Covert Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Buswhick Pool",
      "location": "Flushing Ave, Bushwick Ave & Humboldt St",
      "type": "Playgrounds"
    },
    {
      "name": "Ten Eyck Playground",
      "location": "Bushwick Ave, Scholes & Meserole Sts",
      "type": "Playgrounds"
    },
    {
      "name": "El Hajj Malik El Shabazz Playground",
      "location": "Reid Ave, Macon & Macdonough Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Surf Playground",
      "location": "Surf Ave, W 25 & W 27 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Digilio Playground",
      "location": "Mcdonald Ave & Ave F",
      "type": "Playgrounds"
    },
    {
      "name": "Park Slope Playground",
      "location": "Berkeley Pl, Lincoln Pl, 5 & 6 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Edmonds Playground",
      "location": "Dekalb Ave, Adelphi St & Carlton Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Hattie Carthan Playground",
      "location": "Monroe St, Tompkins Ave, Madison St & Marcy Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Jacob Joffe Fields",
      "location": "Ave K Bet E 58 & E 59 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Fish Playground",
      "location": "Saratoga Ave Bet Herkimer & Fulton Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Hickman Playground",
      "location": "Veterans Ave Bet E 68 & E 66 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Evergreen Playground",
      "location": "Evergreen Ave & Decatur, Schaefer Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Fermi Playground",
      "location": "Troutman St & Central Ave, Starr St & Wilson Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Century Playground",
      "location": "W Brighton Ave Bet W 2 & W 3 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Newport Playground",
      "location": "Newport Ave & Thatford Ave, Osborne St",
      "type": "Playgrounds"
    },
    {
      "name": "100% Playground",
      "location": "Glenwood Rd, E 100 & E 101 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Osborn Playground",
      "location": "Linden Blvd & Osborn St, Thatford Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Willoughby Playground",
      "location": "Tompkins, Willoughby, Vernon Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Bath Playground",
      "location": "Bath Ave Bet 24 Ave & Bay 37 St",
      "type": "Playgrounds"
    },
    {
      "name": "Elijah Stroud Playground",
      "location": "Classon Ave, Sterling Pl & Park Pl",
      "type": "Playgrounds"
    },
    {
      "name": "Curtis Park",
      "location": "S/s Foster Ave, E 81 & E 82 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Bergen Beach Playground",
      "location": "Ave T, Ave N, E 71 & E 72 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "North Pacific Playground",
      "location": "N/s Pacific St, Bet Nevins St & 3 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Jackie Robinson Playground",
      "location": "Sullivan Pl, Franklin Ave, Montgomery St",
      "type": "Playgrounds"
    },
    {
      "name": "Eugenio Maria De Hostos Playground",
      "location": "Harrison Ave Bet Walton & Lorimer Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Chester Playground",
      "location": "Chester St, Sutter Ave, Bristol St, Pitkin Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Chiarantano Fields",
      "location": "E 45-e 46 Sts, Glenwood To Farragut Rds",
      "type": "Playgrounds"
    },
    {
      "name": "Jacob's Ladder Playground",
      "location": "Clymer St Bet Wythe And Kent Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Umma Park",
      "location": "Woodruff, Ocean & Crooke Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Mother Cabrini Park",
      "location": "President Street Bet Van Brunt & Columbia Streets",
      "type": "Playgrounds"
    },
    {
      "name": "Lt. Federico Narvaez Tot Lot",
      "location": "Argyle And Cortelyou Rds",
      "type": "Playgrounds"
    },
    {
      "name": "Nehemiah Park",
      "location": "Osborn St, Watkins St, Riverdale",
      "type": "Playgrounds"
    },
    {
      "name": "Wyona Street Playground",
      "location": "Wyona St, Vermont St, Fulton St, Jamaica Ave, Arln",
      "type": "Playgrounds"
    },
    {
      "name": "Epiphany Playground",
      "location": "Berry St, S. 9th St, S. 10th St",
      "type": "Playgrounds"
    },
    {
      "name": "Bennett Park",
      "location": "Ft Washington Ave, W 183 St, Pinehurst Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Heckscher Playground",
      "location": "62 ST, BET WEST & CENTER DRS",
      "type": "Playgrounds"
    },
    {
      "name": "Billy Johnson Playground",
      "location": "67 ST & 5TH AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Adventure Playground",
      "location": "68 ST & CENTRAL PARK WEST",
      "type": "Playgrounds"
    },
    {
      "name": "Mariner's Gate Playground",
      "location": "84 ST & CENTRAL PARK WEST",
      "type": "Playgrounds"
    },
    {
      "name": "Safari Playground",
      "location": "91 ST & CENTRAL PARK WEST",
      "type": "Playgrounds"
    },
    {
      "name": "Bendheim Playground",
      "location": "100 ST & 5TH AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Bernard Playground",
      "location": "108 ST & FIFTH AVE",
      "type": "Playgrounds"
    },
    {
      "name": "110th St Playground",
      "location": "110 ST & CATHEDRAL PKWY",
      "type": "Playgrounds"
    },
    {
      "name": "110th St & Lenox Ave Playground",
      "location": "110 ST & LENOX AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Playground One Fifty Two Clii",
      "location": "W 152 ST & BRADHURST AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Jackie Robinson Park",
      "location": "W 149 ST & BRADHURST AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Columbus Park",
      "location": "Baxter, Mulberry, Bayard & Park Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Corlears Hook Park",
      "location": "Jackson, Cherry Sts, Fdr Drive",
      "type": "Playgrounds"
    },
    {
      "name": "Carmansville Playground",
      "location": "Amsterdam Ave, W 151 To W 152 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Downing Street Playground",
      "location": "Downing To Carmine Sts, Ave Of Americas",
      "type": "Playgrounds"
    },
    {
      "name": "Lily Brown Playground",
      "location": "W 162 ST, E/O RIVERSIDE DR",
      "type": "Playgrounds"
    },
    {
      "name": "Jacob Javits Playground",
      "location": "M C PLAZA, FT WASHINGTON AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Anne Loftus Playground",
      "location": "BROADWAY & DYCKMAN ST",
      "type": "Playgrounds"
    },
    {
      "name": "Sunken Playground",
      "location": "W 167 ST & EDGECOMBE AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Quisqueya Playground",
      "location": "W 180 ST & AMSTERDAM AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Wallenberg Playground",
      "location": "W 189 ST &  AMSTERDAM AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Ft George Playground",
      "location": "FT GEORGE, ST NICHOLAS AVES",
      "type": "Playgrounds"
    },
    {
      "name": "Adventure Playground",
      "location": "W 164 ST & EDGECOMBE AVE",
      "type": "Playgrounds"
    },
    {
      "name": "James J Walker Park",
      "location": "Hudson, Leroy, Clarkson Sts, 7 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Hamilton Place Playground",
      "location": "Hamilton Pl, W 140 To W 141 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Emerson Playground",
      "location": "SEAMAN AVE BET ISHAM, W 207 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Indian Road Playground",
      "location": "W 214 ST & SEAMAN AVE",
      "type": "Playgrounds"
    },
    {
      "name": "John Jay Park",
      "location": "Fdr Drive, E 76 To E 78 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Thomas Jefferson Park",
      "location": "E 111 ST & 1 AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Madison Square Park",
      "location": "E 25 ST & MADISON AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Morningside Park",
      "location": "W 123 ST & MORNINGSIDE AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Morningside Playground",
      "location": "W 117 ST & MORNINGSIDE AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Morningside Park",
      "location": "MORNINGSIDE AVE & 113 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Morningside Park",
      "location": "MORNINGSIDE DR &  110 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Mt. Morris East",
      "location": "E 122 ST & MADISON AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Luther Gulick Playground",
      "location": "Columbia, Delancey & Willett Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Loeb Playground",
      "location": "Henry St, Market St, E Broadway",
      "type": "Playgrounds"
    },
    {
      "name": "Vesuvio Playground",
      "location": "Thompson St, Spring To Prince Sts",
      "type": "Playgrounds"
    },
    {
      "name": "River Run Playground",
      "location": "W 83 ST & RIVERSIDE DR",
      "type": "Playgrounds"
    },
    {
      "name": "Hippo Playground",
      "location": "W 91 ST & RIVERSIDE DR",
      "type": "Playgrounds"
    },
    {
      "name": "Dinosaur Playground",
      "location": "W 97 ST & RIVERSIDE DR",
      "type": "Playgrounds"
    },
    {
      "name": "Claremont",
      "location": "W 124 ST & RIVERSIDE DR",
      "type": "Playgrounds"
    },
    {
      "name": "Tot Lot One Hundred Five",
      "location": "W 105-106 ST, RIVERSIDE DR",
      "type": "Playgrounds"
    },
    {
      "name": "Tot Lot One Hundred And Ten",
      "location": "W110-111ST, RIVERSIDE DR",
      "type": "Playgrounds"
    },
    {
      "name": "Tot Lot  One Hundred And Sixteen",
      "location": "W116ST-117ST/RIVERSIDE DR",
      "type": "Playgrounds"
    },
    {
      "name": "Riverbank Playground",
      "location": "W 142 ST & RIVERSIDE DR",
      "type": "Playgrounds"
    },
    {
      "name": "Palisades Playground",
      "location": "W 148 ST & RIVERSIDE DRIVE",
      "type": "Playgrounds"
    },
    {
      "name": "Arlington Edinboro Playground",
      "location": "W 140 ST & ST NICHOLAS AVE",
      "type": "Playgrounds"
    },
    {
      "name": "St Nicholas",
      "location": "W 129 ST & ST NICHOLAS TERR",
      "type": "Playgrounds"
    },
    {
      "name": "Catbird Playground",
      "location": "EAST 84 ST & EAST END AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Seward Park",
      "location": "Canal, Hester, Essex, Jefferson Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Sakura Park",
      "location": "Riverside Dr, Claremont Ave To W 122 St",
      "type": "Playgrounds"
    },
    {
      "name": "Union Square",
      "location": "UNION SQ W BETW. 17 & 16 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Washington Square Park",
      "location": "WASHINGTON SQ N/EAST OF  5 AVE",
      "type": "Playgrounds"
    },
    {
      "name": "J Hood Wright Park",
      "location": "W 173 ST & FT WASHINGTONA VE",
      "type": "Playgrounds"
    },
    {
      "name": "Houston St Playground",
      "location": "E HOUSTON TO STANTON STS",
      "type": "Playgrounds"
    },
    {
      "name": "Stanton St Courts",
      "location": "STANTON ST",
      "type": "Playgrounds"
    },
    {
      "name": "Rivington St Playground",
      "location": "RIVINGTON ST",
      "type": "Playgrounds"
    },
    {
      "name": "Playground 103 CIII",
      "location": "Fdr Drive & E 103 St",
      "type": "Playgrounds"
    },
    {
      "name": "James Weldon Johnson Playground",
      "location": "E 115 St Bet 3 & Lexington Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Essex Playground",
      "location": "Essex, Norfolk & Houston Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Playground Of The Americas",
      "location": "S/s W Houston St, Ave Of Americas",
      "type": "Playgrounds"
    },
    {
      "name": "Capt Jacob Joseph Playground",
      "location": "Rutgers & Henry Sts",
      "type": "Playgrounds"
    },
    {
      "name": "First Park",
      "location": "Houston St, E 1 St, 1 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Minetta Playground",
      "location": "Minetta Lane, W 3 St & Ave Of Americas",
      "type": "Playgrounds"
    },
    {
      "name": "Little Flower Playground",
      "location": "Madison St Opp Jefferson St",
      "type": "Playgrounds"
    },
    {
      "name": "Harlem Lane Playground",
      "location": "Harlem River, W 151 To W 154 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "White Playground",
      "location": "Lexington Ave, E 105 To E 106 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Courtney Callender Playground",
      "location": "5 Ave, W 130 To W 131 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Samuel Playground",
      "location": "Lenox Ave, W 139 To W 140 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Mccaffrey Playground",
      "location": "W 43 St, 8 & 9 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Asser Levy Playground",
      "location": "E 23 To E 25 Sts, Fdr Drive",
      "type": "Playgrounds"
    },
    {
      "name": "Baruch Playground",
      "location": "Rivington, Mangin Sts & Baruch Pl",
      "type": "Playgrounds"
    },
    {
      "name": "Cherry Clinton Playground",
      "location": "Clinton, Cherry & Water Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Peter Minuit Park",
      "location": "E 108 To E 109 Sts Bet Park & Madison Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Samuel N. Bennerson 2nd Playground",
      "location": "W 64 St, W/s Amsterdam Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Col Charles Young Playground",
      "location": "W 145 To W 143 Sts, Lenox Ave, Harlem River Drive",
      "type": "Playgrounds"
    },
    {
      "name": "Marx Brothers Playground",
      "location": "2 Ave, E 96 To E 97 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Sheltering Arms Park",
      "location": "W 126 To W 129 Sts, Amsterdam Ave To Old Broadway",
      "type": "Playgrounds"
    },
    {
      "name": "Stanley Isaacs Court",
      "location": "Fdr Drive, E 95 To E 97 St",
      "type": "Playgrounds"
    },
    {
      "name": "Lincoln Playground",
      "location": "S/e Corner 5 Ave & E 135 St",
      "type": "Playgrounds"
    },
    {
      "name": "Sidney Hillman Playground",
      "location": "Lewis, Delancey Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Monsignor Kett Playground",
      "location": "W 204 St Bet 10 & Nagle Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Booker T Washington Playground",
      "location": "N/s W 108 St, Columbus & Amsterdam Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Moore Playground",
      "location": "Madison Ave, E 130 & E 131 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Morningside Playground",
      "location": "Morningside Ave, W 123 & W 124 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Tanahey Playground",
      "location": "Cherry To Water Sts, W Catherine To Market Slips",
      "type": "Playgrounds"
    },
    {
      "name": "Harlem River Park",
      "location": "Lexington Ave, E 128 & E 129 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Harlem River Park",
      "location": "Lexington Ave, E 129 To E 130 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Blake Hobbs Park",
      "location": "E 102 To E 104 Sts & 2 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Washington Playground",
      "location": "99 To 100 Sts, 3 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Holcombe Rucker Playground",
      "location": "W 155 St, 8 Ave To Harlem River Drive",
      "type": "Playgrounds"
    },
    {
      "name": "Howard Bennett Playground",
      "location": "W 135 To W 136 Sts, Lenox To 5 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Desalvio Playground",
      "location": "Spring & Mulberry Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Tecumseh Playground",
      "location": "W 78 St & Amsterdam Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Jacob Schiff Playground",
      "location": "Amsterdam Ave, W 136 St",
      "type": "Playgrounds"
    },
    {
      "name": "Wagner Playground",
      "location": "N/s E 120 St Bet 1 & 2 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Augustus Saint Gaudens",
      "location": "2 Ave, E 19 To E 20 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Playground 70",
      "location": "W 70 St Bet West End & Amsterdam Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Orville & Wilbur Playground",
      "location": "St Nicholas Ave & W 156 St",
      "type": "Playgrounds"
    },
    {
      "name": "Sol Lain Playground",
      "location": "Broadway, Henry St, Gouverneur St",
      "type": "Playgrounds"
    },
    {
      "name": "Samuel Seabury Playground",
      "location": "Lexington Ave, E 95 To E 96 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Bloomingdale Playground",
      "location": "Amsterdam Ave, W 104 & W 105 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Nathan Straus Playground",
      "location": "N/s Rivington & Attorney Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Sol Bloom Playground",
      "location": "Columbus Ave, W 91 To W 92 Sts, Central Park W",
      "type": "Playgrounds"
    },
    {
      "name": "Ps 194 Playground",
      "location": "7 To 8 Aves, W 143 To W 144 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Penn South Playground",
      "location": "W 26, 8 To 9 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Bleecker Playground",
      "location": "Hudson, Bleecker & W 11 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "East River Playground",
      "location": "Fdr Drive, E 106 To E 107 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Mckinley Playground",
      "location": "Ave A, E 3-e 4 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Bellevue South Park",
      "location": "E 26 To E 28 Sts, 2 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Playground Eighty Nine Lxxxix",
      "location": "S/s W 89 St, Amsterdam & Columbus Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Hells Kitchen Park",
      "location": "E/s 10 Ave, W 47 To W 48 St",
      "type": "Playgrounds"
    },
    {
      "name": "St. Gregory's Park",
      "location": "W. 90th St B/w Broadway & Amsterdam Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Wild Flower Meadow",
      "location": "G CENTRAL PKWY (UPPER AREA)",
      "type": "Playgrounds"
    },
    {
      "name": "Horatio Playground",
      "location": "HORATIO PKWY & 50th Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Alley Pond Park: Near Ballfield",
      "location": "NR SPRINGFIELD LOT/BALLFIELDS",
      "type": "Playgrounds"
    },
    {
      "name": "Alley Athletic Playground",
      "location": "WINCHESTER BLVD, UNION TPKE",
      "type": "Playgrounds"
    },
    {
      "name": "Grover Cleveland Park",
      "location": "Rene Ct, Grandview Av, Stanhope St, Fairview Av",
      "type": "Playgrounds"
    },
    {
      "name": "Charybdis Playground",
      "location": "SHORE BLVD OPP 23 AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Sutphin Playground",
      "location": "SUTPHIN BLVD & 125 AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Lakeview Lane Playground",
      "location": "LAKEVIEW LANE & 122 AVE",
      "type": "Playgrounds"
    },
    {
      "name": "157th St Playground",
      "location": "157 ST & 116 AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Baisley Park South",
      "location": "150 ST & 130 AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Bowne Playground",
      "location": "29 AND 32 AVES, 158 TO 159 STS",
      "type": "Playgrounds"
    },
    {
      "name": "Bayswater Playground",
      "location": "BEACH  32  ST  &  DICKENS AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Poppenhusen Playground",
      "location": "21 Ave, 124 St, 20 Ave, 123 St",
      "type": "Playgrounds"
    },
    {
      "name": "Sobelsohn Park",
      "location": "UNION TPKE, PARK LANE S, ADJ OVERLOOK",
      "type": "Playgrounds"
    },
    {
      "name": "Jackson Pond Playground",
      "location": "108 ST & MYRTLE AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Greenhouse Playground",
      "location": "MYRTLE AVE, WOODHAVEN BLVD",
      "type": "Playgrounds"
    },
    {
      "name": "Dry Harbor Playground",
      "location": "80 ST & MYRTLE AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Redwood Playground",
      "location": "N/O G C PKWY OPP 193 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Seven Gables Playground",
      "location": "S/o L I Exwy, 210 & Oceania Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Rufus King Park",
      "location": "JAMAICA AVE & 153 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Playground",
      "location": "164 ST & LITHONIA",
      "type": "Playgrounds"
    },
    {
      "name": "Four Winds Playground",
      "location": "BOOTH MEMORIAL AVE & 160 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Playground",
      "location": "ROSE & OAK AVES",
      "type": "Playgrounds"
    },
    {
      "name": "Linden Park",
      "location": "41 To 42 Aves, 103 St",
      "type": "Playgrounds"
    },
    {
      "name": "Laurelton Parkway West",
      "location": "120TH AVE & 238TH STREET",
      "type": "Playgrounds"
    },
    {
      "name": "Windmuller Playground",
      "location": "52 St, Woodside Ave, 39 Rd, 39 Dr, 54 St",
      "type": "Playgrounds"
    },
    {
      "name": "Noonan Playground",
      "location": "Greenpoint Ave, 43 St, 47 Ave, 42 St",
      "type": "Playgrounds"
    },
    {
      "name": "Andrews Playground",
      "location": "49 Ave, Vernon Blvd, 5 St",
      "type": "Playgrounds"
    },
    {
      "name": "Equity Park",
      "location": "88 To 89 Aves, 90 St, Woodhaven Blvd",
      "type": "Playgrounds"
    },
    {
      "name": "Triborough Bridge Playground A",
      "location": "HOYT AVE, 19 TO 21 STS",
      "type": "Playgrounds"
    },
    {
      "name": "Triborough Bridge Playground D",
      "location": "Hoyt Ave, 24 St To Crescent St",
      "type": "Playgrounds"
    },
    {
      "name": "Triborough Bridge Playground E",
      "location": "Hoyt Ave, Crescent St, 26 St",
      "type": "Playgrounds"
    },
    {
      "name": "Hoyt Playground",
      "location": "Hoyt Ave, 29 To 31 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Hart Playground",
      "location": "65 To 69 Sts, 37 Ave, Broadway",
      "type": "Playgrounds"
    },
    {
      "name": "Gorman Playground",
      "location": "30 Ave, 85 St, 25 Ave, 84 St",
      "type": "Playgrounds"
    },
    {
      "name": "Police Officer Edward Byrne Park",
      "location": "N Conduit Ave, 134 St, 135 Ave, 130 Pl",
      "type": "Playgrounds"
    },
    {
      "name": "Addabbo Playground",
      "location": "BET 81-82 STS, N CONDUIT AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Triassic Playground",
      "location": "JEWEL AVE & VAN WYCK EXWY",
      "type": "Playgrounds"
    },
    {
      "name": "Jurassic Playground",
      "location": "W/S OF MEADOW LAKE & G C PKWY",
      "type": "Playgrounds"
    },
    {
      "name": "Lawrence Playground",
      "location": "COLLEGE PT BLVD, BOTANIC GDNS",
      "type": "Playgrounds"
    },
    {
      "name": "Playground For All Children",
      "location": "111 ST & SAULTELL & 56 AVES",
      "type": "Playgrounds"
    },
    {
      "name": "Albert H. Mauro Playground",
      "location": "PARK DR EAST & 73 TERRACE",
      "type": "Playgrounds"
    },
    {
      "name": "Middle Village Playground",
      "location": "68 Rd, 79 St, 69 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Juniper North Playground Tennis",
      "location": "80TH ST, JUNIPER BLVD S, 77TH PLACE, JUNIPER BLVD N, 78TH ST",
      "type": "Playgrounds"
    },
    {
      "name": "Juniper South Playground",
      "location": "72 ST, 74ST, JUNIPER BLVD SOUTH",
      "type": "Playgrounds"
    },
    {
      "name": "Raymond O'connor Park",
      "location": "33 Ave, 210 St, 32 Ave, Cpl Kennedy St",
      "type": "Playgrounds"
    },
    {
      "name": "Vernon Playground",
      "location": "VERNON BLVD, 40 & 41 AVES",
      "type": "Playgrounds"
    },
    {
      "name": "Queensbridge Baby Park",
      "location": "41ST RD AND 12TH ST (EAST OF VERNON BLVD)",
      "type": "Playgrounds"
    },
    {
      "name": "Howard Von Dohlen Playground",
      "location": "Archer Ave, 138 Pl, 91 Ave, 138 St",
      "type": "Playgrounds"
    },
    {
      "name": "Daniel M O'connell Playground",
      "location": "113 & Murdock Aves, 196 St",
      "type": "Playgrounds"
    },
    {
      "name": "Springfield Playground",
      "location": "147 AVE & 184 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Laurelton Playground",
      "location": "Brookville Blvd, S/o 136 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Police Officer Nicholas Demuti",
      "location": "Liberty Ave, 101 To 102 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Frederick B Judge Playground",
      "location": "111 Ave, 134 & 135 Sts, Lincoln St",
      "type": "Playgrounds"
    },
    {
      "name": "Harvard Playground",
      "location": "179 Pl, N/o Jamaica Ave",
      "type": "Playgrounds"
    },
    {
      "name": "K.l. Williams Playground (tennis)",
      "location": "LIBERTY AVE, 172-173 STS",
      "type": "Playgrounds"
    },
    {
      "name": "Junction Playground",
      "location": "96 St, 34 Ave, Junction Blvd",
      "type": "Playgrounds"
    },
    {
      "name": "Astoria Health Center Playground",
      "location": "14 St, 31 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Marconi Park",
      "location": "109 Ave, 157 St, 108 Ave, 155 St",
      "type": "Playgrounds"
    },
    {
      "name": "London Planetree Playground",
      "location": "88 To 89 Sts, Atlantic To 95 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Phil \"scooter\" Rizzuto Park",
      "location": "125 ST & ATLANTIC AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Virginia Principe Playground",
      "location": "CENTER OF PK, L I E SVCE RD, 54 AVE BETWEEN 63 AND 61 STS",
      "type": "Playgrounds"
    },
    {
      "name": "Breininger Park",
      "location": "Braddock Ave & 240 St",
      "type": "Playgrounds"
    },
    {
      "name": "115th Street Playground",
      "location": "14 Rd, 115 St, 14 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Murray Playground",
      "location": "21 St, 45 Ave, 11 St, 45 Rd",
      "type": "Playgrounds"
    },
    {
      "name": "Beach 59th Street Playground",
      "location": "Boardwalk & Beach 59-60 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Beach 9th Street Playground",
      "location": "B 9 ST N OF BOARDWALK",
      "type": "Playgrounds"
    },
    {
      "name": "Sandpiper Playground",
      "location": "BET B 106-107 STS",
      "type": "Playgrounds"
    },
    {
      "name": "Rockaway Playground - M",
      "location": "B 84 ST & SHORE FRONT PKWY",
      "type": "Playgrounds"
    },
    {
      "name": "Rockaway Playground - N",
      "location": "B 82 ST & SHORE FRONT PKWY",
      "type": "Playgrounds"
    },
    {
      "name": "St Michaels Playground",
      "location": "30 To 31 Aves & Boody St, Bklyn-queens Exwy",
      "type": "Playgrounds"
    },
    {
      "name": "Nautilus Playground",
      "location": "Merrick Blvd, 120 Ave, Baisley Blvd",
      "type": "Playgrounds"
    },
    {
      "name": "Queens Valley Playground",
      "location": "137 St & 77 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Dutch Kills Playground (ps 112)",
      "location": "37 Ave, 28 St, 36 Ave, Crescent St",
      "type": "Playgrounds"
    },
    {
      "name": "Norelli-hargreaves Playground",
      "location": "Van Wyck Exwy, 106 Ave, 142 St, 104 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Playground One-forty",
      "location": "Van Wyck Exwy, Rockaway Blvd, 140 St, 120 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Manton Playground",
      "location": "MANTON ST & 83 AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Farm Playground/ps 26",
      "location": "73 Ave, 195 St & 196 Pl",
      "type": "Playgrounds"
    },
    {
      "name": "Hallets Cove Playground (area A)",
      "location": "HALLETS COVE, VERNON BLVD",
      "type": "Playgrounds"
    },
    {
      "name": "Hallets Point Playground (area B)",
      "location": "1 ST & E RIVER",
      "type": "Playgrounds"
    },
    {
      "name": "Westbourne Playground",
      "location": "Mott & Westbourne Aves, B 25 St",
      "type": "Playgrounds"
    },
    {
      "name": "John Adams Playground",
      "location": "133 Ave, 101 To 103 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Seventies Playground",
      "location": "78 Ave, 74 To 75 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Glendale Playground",
      "location": "Central Ave, 70th And 71st Street",
      "type": "Playgrounds"
    },
    {
      "name": "Saul Weprin Playground",
      "location": "201 To 202 Sts Bet 53 & 56 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Utopia Playground",
      "location": "73 Ave, Jewel Ave, Utopia Pkwy",
      "type": "Playgrounds"
    },
    {
      "name": "Playground Thirty-five",
      "location": "Steinway St & 35 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Steinway Community Playground",
      "location": "47 To 48 Sts, 20 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Playground 146",
      "location": "146 ST & 56 RD",
      "type": "Playgrounds"
    },
    {
      "name": "Silent Springs Playground",
      "location": "COLDEN ST & GERANIUM AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Captain Mario Fajardo Park",
      "location": "KISSENA BLVD & BOOTH MEM AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Rachel Carson Playground",
      "location": "COLDEN & JUNIPER STS",
      "type": "Playgrounds"
    },
    {
      "name": "Underhill Playground",
      "location": "PECK AVE & 188 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Holy Cow Playground",
      "location": "Horace Harding Blvd, Bishop Reilly Hs, Peck Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Evergreen Park (ps 68)",
      "location": "St. Felix & 75 Av, 60th St",
      "type": "Playgrounds"
    },
    {
      "name": "Travers Park",
      "location": "34 Ave, 78 St, 77 St",
      "type": "Playgrounds"
    },
    {
      "name": "The Painter's Playground",
      "location": "Alderton St From Dieterle To Elwell Crescents",
      "type": "Playgrounds"
    },
    {
      "name": "Delphin Greene Playground",
      "location": "121 Ave & 237 St",
      "type": "Playgrounds"
    },
    {
      "name": "Bowne Playground",
      "location": "Sanford Ave From Union To Bowne Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Tenney Park",
      "location": "74 Ave & 260 St",
      "type": "Playgrounds"
    },
    {
      "name": "Fresh Meadows Playground",
      "location": "67 Ave & 173 St",
      "type": "Playgrounds"
    },
    {
      "name": "Tall Oak Playground",
      "location": "64 Ave, 218 & 219 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Playground Eighty (lxxx)",
      "location": "80 Ave, 261 & 262 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Vleigh Playground",
      "location": "70 Rd To 71 Ave, 150 St To Kissena Blvd",
      "type": "Playgrounds"
    },
    {
      "name": "Bellaire Playground",
      "location": "89 Ave, 207 & 208 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Bland Playground",
      "location": "40 Rd, Prince & Main Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Pomonok Playground",
      "location": "Kissena Blvd, 65 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Locust Manor Playground",
      "location": "192 St, S/s 121 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Woodtree Playground",
      "location": "20 Ave, 37 St, 38 St",
      "type": "Playgrounds"
    },
    {
      "name": "Ravenswood Playground",
      "location": "35 Ave, 21 St, 34 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Vleigh Place Playground",
      "location": "Vleigh Pl, 141 St & Union Tpke",
      "type": "Playgrounds"
    },
    {
      "name": "Maurice A Fitzgerald Playground",
      "location": "Atlantic Ave Bet 104 & 106 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Admiral Park",
      "location": "Little Neck Pkwy, 42 To 43 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Tornsey Playground",
      "location": "Skillman Ave & 43 St",
      "type": "Playgrounds"
    },
    {
      "name": "Electric Playground",
      "location": "W/s 164 St, S/o 65 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Whitestone Playground",
      "location": "152 St Bet 11 & 12 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Emerald Playground",
      "location": "164 St Bet Jewel & 71 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Challenge Playground",
      "location": "W/s 251 St Bet 61 & 63 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Cadwallader Colden Playground",
      "location": "Union St & 31 Rd",
      "type": "Playgrounds"
    },
    {
      "name": "Telephone Playground",
      "location": "Bell Blvd, 75 Ave & 217 St",
      "type": "Playgrounds"
    },
    {
      "name": "Peters Field",
      "location": "Liberty Ave, 183 Pl, 104 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Hillside Park",
      "location": "82 Ave, 256 To 257 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Grassmere Playground",
      "location": "Grassmere Terr, Brookhaven Ave, Briar Pl",
      "type": "Playgrounds"
    },
    {
      "name": "Alley Park",
      "location": "67 Ave & 230 St",
      "type": "Playgrounds"
    },
    {
      "name": "Handball Haven",
      "location": "102 St, 62 Ave & Yellowstone Blvd",
      "type": "Playgrounds"
    },
    {
      "name": "Turtle Playground",
      "location": "138 St & Service Rd S/s Horace Harding Exwy",
      "type": "Playgrounds"
    },
    {
      "name": "Gunn Park (ps 18)",
      "location": "S/s Hillside Ave, E/o 235 Ct",
      "type": "Playgrounds"
    },
    {
      "name": "Haggerty Park",
      "location": "S/s Jamaica Ave Bet 202 & 204 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Bridge And Tunnel Park",
      "location": "Tunnel Plaza, 50 Ave, 11 St",
      "type": "Playgrounds"
    },
    {
      "name": "Playground Ninety Xc",
      "location": "Northern Blvd & 90 St",
      "type": "Playgrounds"
    },
    {
      "name": "Northern Playground",
      "location": "Northern Blvd & 93 St",
      "type": "Playgrounds"
    },
    {
      "name": "Marie Curie Park",
      "location": "46 Ave & 211 St",
      "type": "Playgrounds"
    },
    {
      "name": "Bulova Park",
      "location": "W/s 77 St, N/s 25 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Louis Pasteur Park",
      "location": "52 Ave Bet 248 St & Marathon Pkwy",
      "type": "Playgrounds"
    },
    {
      "name": "Freedom Square",
      "location": "Vleigh Pl & Main St",
      "type": "Playgrounds"
    },
    {
      "name": "East Elmhurst Playground",
      "location": "25 Ave Bet 98 & 100 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Ampere Playground",
      "location": "101 Ave Bet 82 & 83 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Francis Lewis Playground",
      "location": "42 Ave At Francis Lewis Blvd",
      "type": "Playgrounds"
    },
    {
      "name": "Centerville Playground",
      "location": "96 St, Centreville St & Albert Rd",
      "type": "Playgrounds"
    },
    {
      "name": "Joseph Austin Playground",
      "location": "Grand Central Pkwy Bet 164 Pl & 168 St",
      "type": "Playgrounds"
    },
    {
      "name": "Steinway Playground (jhs 141)",
      "location": "20 Rd-20 Ave, 37-38 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Bay Terrace Playground",
      "location": "Ne Corner 212 St & 23 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Oakland Gardens",
      "location": "E/s Springfield Blvd & 54 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Latimer Playground",
      "location": "167 St & 109 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Hollis Playground",
      "location": "204 St, Hollis Ave, 205 St, 111 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Lannett Playground",
      "location": "B 8 St, Lanett Ave, B 9 St",
      "type": "Playgrounds"
    },
    {
      "name": "Harold Schneiderman Playground",
      "location": "155 Ave Bet 84 & 85 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Rochdale Park (jhs 72)",
      "location": "NR GUY BREWER BLVD & 134 AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Rocket Park",
      "location": "N Conduit Ave, Arion Rd, 149 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Louis Armstrong Playground",
      "location": "37 Ave Bet 112 & 113 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Edward Hart T Playground",
      "location": "147 St Bet 26 & 27 Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Walter Ward Playground",
      "location": "89 St & 160 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Reiff Playground",
      "location": "Fresh Pond Rd, 63 St, 59 Drive",
      "type": "Playgrounds"
    },
    {
      "name": "North Rochdale Playground",
      "location": "Baisley Blvd & Bedell St",
      "type": "Playgrounds"
    },
    {
      "name": "South Rochdale Playground",
      "location": "173 St & 137 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Spirit Playground",
      "location": "36 Ave Bet 9 & 10 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Sunrise Playground",
      "location": "149 Rd, Weller Lane, 149 Ave, 253 St",
      "type": "Playgrounds"
    },
    {
      "name": "Tot Lot Park",
      "location": "W/s 98 St Bet Northern Blvd & 32 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Sean's Place",
      "location": "38 St, 31 Av & Brwy Btwn 31 Av & Broadway",
      "type": "Playgrounds"
    },
    {
      "name": "Playground",
      "location": "NEAR THE RECREATION BUILDING; OFF BAISLEY AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Broad Channel Park",
      "location": "Cross Bay Blvd, 100 Pl, E 18 Rd, 203 Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Clove Lakes Park Playground",
      "location": "CLOVE RD & CHESHIRE PL",
      "type": "Playgrounds"
    },
    {
      "name": "Saturn Play Equipment",
      "location": "CLOVE ROAD & FOREST AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Mahoney Playground",
      "location": "Beechwood Ave, Crescent & Cleveland Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Dugan Playground",
      "location": "Mill Rd, Weed Ave, Tysens Lane",
      "type": "Playgrounds"
    },
    {
      "name": "Wolfes Pond Park",
      "location": "BETWEEN PARK BUILDING AND POND",
      "type": "Playgrounds"
    },
    {
      "name": "Wolfes Pond Park",
      "location": "END OF CORNELIA AVE, OPP HOCKEY RINK",
      "type": "Playgrounds"
    },
    {
      "name": "Midland Playground",
      "location": "Lincoln, Mason, Midland, Boundary, Bedford Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Schmul Park",
      "location": "WILD AVE, PEARSON ST",
      "type": "Playgrounds"
    },
    {
      "name": "Playland",
      "location": "CAPADONNO BLVD & SAND LANE",
      "type": "Playgrounds"
    },
    {
      "name": "Midland Playground",
      "location": "BET MILLER FIELD, GREELY AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Midland Beach Playground",
      "location": "BET GRAHAM BLVD, JEFFERSON AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Carlton Park",
      "location": "Foster, Carlton, Burchard Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Arrochar Playground",
      "location": "Sand Lane, Major & Mcfarland Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Old Town Playground",
      "location": "Parkinson Ave, Kramer St",
      "type": "Playgrounds"
    },
    {
      "name": "Toad Hall Playground",
      "location": "Schmidts Lane, Manor Rd & Laguardia Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Adventure Station",
      "location": "INSIDE WILLOWBROOK PARK ADJ TO CAROUSEL FOR ALL CHILDREN",
      "type": "Playgrounds"
    },
    {
      "name": "Terrace Playground",
      "location": "Foote Ave, Howard Ave & Martha St",
      "type": "Playgrounds"
    },
    {
      "name": "Great Kills Veterans Playground",
      "location": "Hillcrest Ave, N/o Highmount Rd",
      "type": "Playgrounds"
    },
    {
      "name": "Naples Playground",
      "location": "Targee St, Naples St",
      "type": "Playgrounds"
    },
    {
      "name": "Lemon Creek Park",
      "location": "HYLAN BLVD, SHARROTT & SEGUINE AVES",
      "type": "Playgrounds"
    },
    {
      "name": "Dongan Playground",
      "location": "Mason, Buel, Dongan Hills Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Greencroft Playground",
      "location": "Redgrave, Greencroft Sts, Ainsworth & Durant Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Double Nickel Playground/ps 55",
      "location": "Preston Ave, Koch Blvd, Arden Rd & Osborne St",
      "type": "Playgrounds"
    },
    {
      "name": "Bloomingdale Park",
      "location": "DRUMGOOLE RD, MAGUIRE AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Jennifer's Playground",
      "location": "Jules Dr, Elson Ct, Regis Dr",
      "type": "Playgrounds"
    },
    {
      "name": "Luis R Lopez Park",
      "location": "Targee Street & Oder Avenue",
      "type": "Playgrounds"
    },
    {
      "name": "Sobel Court Park",
      "location": "Sobel Ct, Vanderbilt Av, Oder Av",
      "type": "Playgrounds"
    },
    {
      "name": "Morton Playground",
      "location": "MORTON PL & UNIVERSITY AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Olinville Playground",
      "location": "E 219 ST, BX RIVER PKWY",
      "type": "Playgrounds"
    },
    {
      "name": "Prospect Park (2)",
      "location": "CROTONA N BET MARMION/PROSPECT",
      "type": "Playgrounds"
    },
    {
      "name": "Crotona Playground (3)",
      "location": "CROTONA N BET WATERLOO/MARMION",
      "type": "Playgrounds"
    },
    {
      "name": "Hill & Dale Playground",
      "location": "CROTONA PK E @ E 173 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Martin Van Buren Playground",
      "location": "CROTONA E-CLAREMONT/PROSPECT",
      "type": "Playgrounds"
    },
    {
      "name": "Tremont Playground (1)",
      "location": "COR E TREMONT & ARTHUR AVES",
      "type": "Playgrounds"
    },
    {
      "name": "Upper",
      "location": "E 178 ST, UPPER LEVEL",
      "type": "Playgrounds"
    },
    {
      "name": "Fort Independence Playground",
      "location": "Sedgwick Ave, Stevenson Pl, Jerome Pk Reservoir",
      "type": "Playgrounds"
    },
    {
      "name": "Hines Park",
      "location": "Fulton To Franklin Aves, S/o E 167 St",
      "type": "Playgrounds"
    },
    {
      "name": "Kossuth Playground",
      "location": "MOSHOLU PWY N/KOSSETH AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Mullaly Park (1)",
      "location": " E 164 ST & RIVER AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Mullaly Playground (2)",
      "location": "CROMWELL AVE & MCCLELLAN ST",
      "type": "Playgrounds"
    },
    {
      "name": "Strong Street Playground",
      "location": "STRONG ST, RESERVOIR AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Fort #4 Playground",
      "location": " RESERVOIR AVE. & SEDGWICK",
      "type": "Playgrounds"
    },
    {
      "name": "Playground For All Children",
      "location": "BRUCKNER EXWY, BUHRE AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Pelican Bay Playground",
      "location": "ORCHARD BEACH  SECTION 6-7",
      "type": "Playgrounds"
    },
    {
      "name": "St James Park",
      "location": "E 193 ST & JEROME AVE",
      "type": "Playgrounds"
    },
    {
      "name": "St Mary's Playground West",
      "location": " ST ANNS AVE & E 147 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Henry Hudson Park (upper)",
      "location": "INDEPENDENCE & W 227 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Slattery Playground",
      "location": "Ryer Ave,valentine Ave & E 183 St",
      "type": "Playgrounds"
    },
    {
      "name": "Van Cortlandt Classic Playground",
      "location": "VC PARK SOUTH, GOUVERNEUR AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Woodlawn Playground",
      "location": "W 239 ST, VAN CORTLANDT EAST",
      "type": "Playgrounds"
    },
    {
      "name": "Southwest Playground",
      "location": "W 240 ST & BROADWAY",
      "type": "Playgrounds"
    },
    {
      "name": "Williamsbridge Oval",
      "location": "RESERVOIR OVAL WEST & 208 ST",
      "type": "Playgrounds"
    },
    {
      "name": "Belmont Playground",
      "location": "E 181, E 182 Sts, Crotona & Belmont Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Cauldwell Playground",
      "location": "E 163 St, Cauldwell Ave, E 161 St, Eagle Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Hunts Point Playground",
      "location": "Hunts Point Rd, Spofford Ave, Faile St",
      "type": "Playgrounds"
    },
    {
      "name": "Goble Playground",
      "location": "S/e Corner Macombs Pl & Gobel Rd",
      "type": "Playgrounds"
    },
    {
      "name": "Mott Playground",
      "location": "Morris To College Aves, E 166-e 167 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Rev J Polite Pg & Stebbins Playground",
      "location": "Rev James Polite Ave, Intervale Ave bet. Home St and 167th St",
      "type": "Playgrounds"
    },
    {
      "name": "Soundview Park",
      "location": "LAFAYETTE AVE BET MORRISON & BOYNTON AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Colucci Playground",
      "location": "Wilkinson & Mayflower Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Watson Gleason Playground",
      "location": "Noble, Gleason, Rosedale, Watson Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Rienzi Playground",
      "location": "White Plains Rd, E 226 St, Barnes Ave, E 225 St",
      "type": "Playgrounds"
    },
    {
      "name": "Flynn Playground",
      "location": "E 157 St, 3 Ave, E 158 St, Brook Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Plimpton Playground",
      "location": "Edward L Grant Hwy, Plimpton Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Bridge Playground",
      "location": "Boscobel Pl, University Ave, W 171 St",
      "type": "Playgrounds"
    },
    {
      "name": "Jenny  Jerome Playground",
      "location": "N/s Cross Bronx Exwy, Jerome Ave, E 174 St",
      "type": "Playgrounds"
    },
    {
      "name": "Admiral Farragut Playground",
      "location": "E 176 St, Crotona Ave, Prospect Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Prospect Playground",
      "location": "Clinton Ave, E 176 St, Prospect Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Bailey Playground",
      "location": "W 234 St, Bailey Ave, W 238 St",
      "type": "Playgrounds"
    },
    {
      "name": "P. O. Serrano Playground",
      "location": "Olmstead, Turnbull, Castle Hill, Lafayette Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Vinmont Veteran Park",
      "location": "W 254 St, Riverdale & Mosholu Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Merriam Playground. (lower)",
      "location": "MERRIAM & OGDEN AVES, W 168 ST, UNIVERSITY",
      "type": "Playgrounds"
    },
    {
      "name": "Dawson Playground",
      "location": "Dawson St, Rogers Pl, Rev. James A Polite",
      "type": "Playgrounds"
    },
    {
      "name": "Nelson Playground",
      "location": "W 166 St, Nelson Ave, Wododycrest Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Spuyten Duyvil Playground",
      "location": "Douglas Ave, W 235 & W 236 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Bruckner Playground/p.s. 183",
      "location": "Phillips Ave, E 177 St",
      "type": "Playgrounds"
    },
    {
      "name": "Angelo Campanero Playground",
      "location": "GUN HILL/EASTCHEST RDS/O'NEIL",
      "type": "Playgrounds"
    },
    {
      "name": "Tiffany Playground",
      "location": "Fox St, E 167 St, Tiffany St",
      "type": "Playgrounds"
    },
    {
      "name": "Colgate Close",
      "location": "N/s Bruckner Exwy At Close & Colgate Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Haffen Park",
      "location": "ELY & BURKE AVES",
      "type": "Playgrounds"
    },
    {
      "name": "Mosholu Playground (ps 8)",
      "location": "MOSHOLU PKWY, BAINBRIDGE AVE",
      "type": "Playgrounds"
    },
    {
      "name": "Marble Hill Playground",
      "location": "Marble Hill Ave Bet W 228 & W 230 Sts",
      "type": "Playgrounds"
    },
    {
      "name": "Haviland Playground",
      "location": "Pugsley, Haviland, Watson Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Stebbins Park",
      "location": "E 165 St, Stebbins Ave, Roger Pl",
      "type": "Playgrounds"
    },
    {
      "name": "Magenta Playground",
      "location": "Rosewood & Magenta Sts, Olinville Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Arcilla Playground",
      "location": "Park, Clay, Teller Aves, E 164 St",
      "type": "Playgrounds"
    },
    {
      "name": "Space Time Playground",
      "location": "Lafayette, Bolton, Underhill Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Gouverneur Playground",
      "location": "3 Ave, St Pauls Pl, Washington Ave",
      "type": "Playgrounds"
    },
    {
      "name": "I Am Park",
      "location": "E 147 St, Jackson Ave, E 144 St, St Marys Pk",
      "type": "Playgrounds"
    },
    {
      "name": "Burns Playground",
      "location": "Mace, Lodovick & Gunther Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Fox Playground",
      "location": "S/e Corner Fox St, E 156 St",
      "type": "Playgrounds"
    },
    {
      "name": "Cleopatra Playground",
      "location": "Anthony Ave & Prospect Pl",
      "type": "Playgrounds"
    },
    {
      "name": "Harding Park",
      "location": "Bolton Ave Bet O'brien & Cornell Aves",
      "type": "Playgrounds"
    },
    {
      "name": "Galileo Park Park",
      "location": "Macombs Road And W 176 Street",
      "type": "Playgrounds"
    },
    {
      "name": "Vidalia Park",
      "location": "Vyse & Daly Aves Bet W 179-180 Streets",
      "type": "Playgrounds"
    },
    {
      "name": "Washington Park",
      "location": "E. 183 St B/w Washington & Park",
      "type": "Playgrounds"
    },
    {
      "name": "Stop & Go Playground",
      "location": "Bathgate, Washington Aves, E. 175 St",
      "type": "Playgrounds"
    },
    {
      "name": "Beanstalk Playground",
      "location": "Billingsley Terr, Phelan Pl, Sedgwick Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Walton Park",
      "location": "E.181st St, Walton Ave,jerome Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Morris Garden",
      "location": "Morris Ave, E.181st St,creston Ave",
      "type": "Playgrounds"
    },
    {
      "name": "Arcilla Playground",
      "location": "Teller Avenue, Park Avenue, Clay Avenue, East 64 Street",
      "type": "Bathrooms"
    },
    {
      "name": "Behagen Playground",
      "location": "Tinton Avenue, East 165 Street, Union Avenue, East 166 Street",
      "type": "Bathrooms"
    },
    {
      "name": "Belmont Playground",
      "location": "Crotona Avenue, East 181 Street",
      "type": "Bathrooms"
    },
    {
      "name": "Capt. Rivera Playground",
      "location": "East 156 Street, Forest Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Clark Playground",
      "location": "3 Avenue, East 144 Street, East 146 Street",
      "type": "Bathrooms"
    },
    {
      "name": "Crotona Park (Pool House)",
      "location": " 173rd Street and Fulton Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Franz Sigel Park",
      "location": "East 153 Street, Gerard Avenue, East 151 Street, Walton Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Magenta Playground",
      "location": "Olinville Avenue, Rosewood Street",
      "type": "Bathrooms"
    },
    {
      "name": "Mathew Muliner Playground",
      "location": "Delancy Place, Muliner Avenue, Matthews Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Millbrook Playground",
      "location": "East 135 Street, Cypress Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Orchard Beach Pavilion",
      "location": "Bruckner Boulevard, Eastchester Bay, Hutchinson",
      "type": "Bathrooms"
    },
    {
      "name": "Parkside Playground",
      "location": "Arnow Avenue, Adee Avenue, Olinville Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Pelham Bay Park (Hunter Island Picnic Area)",
      "location": "Bruckner Boulevard, Eastchester Bay, Hutchinson",
      "type": "Bathrooms"
    },
    {
      "name": "Pelham Bay Park (Playground for All Children)",
      "location": "Bruckner Expressway & Buhre Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Quarry Ballfields",
      "location": "Quarry Road, East 181 Street, Oak Place & Hughes Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Richman (Echo) Park Playground",
      "location": "East 178 Street & Ryer Avenue, Upper Level",
      "type": "Bathrooms"
    },
    {
      "name": "Riverbend Playground",
      "location": "Bailey Avenue, West Kingsbridge Road",
      "type": "Bathrooms"
    },
    {
      "name": "St. Mary's Playground East Playground",
      "location": "Jackson Avenue between East 144 and 145 streets",
      "type": "Bathrooms"
    },
    {
      "name": "Vidalia Park",
      "location": "Vyse & Daly avenues between West 179-180 streets",
      "type": "Bathrooms"
    },
    {
      "name": "Albert J. Parham Playground",
      "location": "Adelphi Street, Clermont, DeKalb & Willoughby avenues",
      "type": "Bathrooms"
    },
    {
      "name": "Carroll Park",
      "location": "Court & Smith Streets",
      "type": "Bathrooms"
    },
    {
      "name": "Coney Island Beach",
      "location": "Stillwell Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Coney Island Beach",
      "location": "West 16th Street",
      "type": "Bathrooms"
    },
    {
      "name": "Coney Island Beach",
      "location": "W 22 ST.",
      "type": "Bathrooms"
    },
    {
      "name": "Fort Greene Playground",
      "location": "Myrtle Avenue & St. Edwards Plaza",
      "type": "Bathrooms"
    },
    {
      "name": "Fox Playground",
      "location": "Avenue H, East 54 to E 55 streets",
      "type": "Bathrooms"
    },
    {
      "name": "Glenwood Playground",
      "location": "Ralph Avenue & Farragut Road",
      "type": "Bathrooms"
    },
    {
      "name": "Jesse Owens Playground",
      "location": "Stuyvesant & Lafayette avenues",
      "type": "Bathrooms"
    },
    {
      "name": "Prospect Park (Middle Long Meadow)",
      "location": "Picnic House",
      "type": "Bathrooms"
    },
    {
      "name": "Prospect Park (The Bandshell)",
      "location": "Prospect Park West/7th Street/15th Street",
      "type": "Bathrooms"
    },
    {
      "name": "PS 286 Playground",
      "location": "Avenue Y, between Brown & Haring streets",
      "type": "Bathrooms"
    },
    {
      "name": "Sternberg Park",
      "location": "Montrose Avenue, Boerum, Lorimer, Leonard streets",
      "type": "Bathrooms"
    },
    {
      "name": "Tiger Playground",
      "location": "Evergreen Avenue & Eldert Street",
      "type": "Bathrooms"
    },
    {
      "name": "Underwood Park",
      "location": "Lafayette & Waverly avenues",
      "type": "Bathrooms"
    },
    {
      "name": "Washington Hall Playground",
      "location": "Park, Washington avenues to Hall Street",
      "type": "Bathrooms"
    },
    {
      "name": "Yak Playground",
      "location": "Avenue Y between Coyle & Batchelder streets",
      "type": "Bathrooms"
    },
    {
      "name": "Carl Schurz Park",
      "location": "East 84 Street & East End Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Central Park (Dana Discovery Center)",
      "location": "110th Street between Fifth Avenue and Malcolm X Boulevard",
      "type": "Bathrooms"
    },
    {
      "name": "Central Park Delacorte Comfort Station",
      "location": "Mid-Park at 80th Street",
      "type": "Bathrooms"
    },
    {
      "name": "Central Park (Lasker)",
      "location": "Central Park at 107th Street",
      "type": "Bathrooms"
    },
    {
      "name": "Central Park (North Meadow Recreation Center)",
      "location": "Mid-park at 97th Street",
      "type": "Bathrooms"
    },
    {
      "name": "Central Park (Wollman Rink)",
      "location": "Center Drive to East Drive (including Gapstow Bridge)",
      "type": "Bathrooms"
    },
    {
      "name": "Chelsea Recreation Center",
      "location": "South of West 25 Street, 9 to 10 avenues",
      "type": "Bathrooms"
    },
    {
      "name": "Columbus Park",
      "location": "Baxter, Mulberry, Bayard & Worth streets",
      "type": "Bathrooms"
    },
    {
      "name": "Fort Tryon Park (Anne Loftus Playground)",
      "location": "Broadway & Dyckman Street",
      "type": "Bathrooms"
    },
    {
      "name": "Fort Washington Park (Lily Brown Playground)",
      "location": "West 162 Street, east of Riverside Drive",
      "type": "Bathrooms"
    },
    {
      "name": "Hamilton Fish Park (Recreation Center)",
      "location": "Between East Houston & Stanton streets",
      "type": "Bathrooms"
    },
    {
      "name": "J. Hood Wright Park",
      "location": "Ft. Washington & Haven avenues, West 173 Street",
      "type": "Bathrooms"
    },
    {
      "name": "Jackie Robinson Park (Recreation Center)",
      "location": "Bradhurst & Edgecombe avenues,West 145 to West 155 streets",
      "type": "Bathrooms"
    },
    {
      "name": "Morningside Park",
      "location": "West 123 Street & Morningside Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Riverside Park (Café)",
      "location": "105th Street, next to Henry Hudson Parkway",
      "type": "Bathrooms"
    },
    {
      "name": "Sara D. Roosevelt Park",
      "location": "East Houston Street to Canal Street",
      "type": "Bathrooms"
    },
    {
      "name": "Vesuvio Playground",
      "location": "Spring & Thompson streets",
      "type": "Bathrooms"
    },
    {
      "name": "Bayside Fields",
      "location": "204 Street & 29 Avenue, Clearview Expressway",
      "type": "Bathrooms"
    },
    {
      "name": "Cunningham Park (HQ8)",
      "location": "South of Union Turnpike, between Francis Lewis Boulevard & 193rd Street",
      "type": "Bathrooms"
    },
    {
      "name": "Flushing Meadows Corona Park (Passerelle)",
      "location": "Unisphere Fountain to pool, at Meridian Road",
      "type": "Bathrooms"
    },
    {
      "name": "Flushing Meadows Corona Park (Playground for All Children) ",
      "location": "111 Street and Corona Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Flushing Meadows Corona Park (Zoo, Ballfields)",
      "location": "Grand Central Parkway to 111th Street to Heckscher Children Farm to Playground for All Children",
      "type": "Bathrooms"
    },
    {
      "name": "Juniper Valley Park",
      "location": "Lutheran Avenue; North and South Juniper boulevards; and the pathway from 76th Street on north end to 75th Street on south end",
      "type": "Bathrooms"
    },
    {
      "name": "Lawerence Virgilio Playground",
      "location": "39 Drive & 54 Street",
      "type": "Bathrooms"
    },
    {
      "name": "Michaelis-Bayswater Park",
      "location": "Beach Channel Drive, B 32 Street, Dwight Avenue, Norton Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Arrochar Playground",
      "location": "Sand Lane, Major Avenue, McFarland Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Blood Root Valley (Greenbelt Nature Center)",
      "location": "Rockland, Manor and Brielle avenues, Forest Hill Road",
      "type": "Bathrooms"
    },
    {
      "name": "Blood Root Valley (Park House)",
      "location": "Rockland, Manor and Brielle avenues, Forest Hill Road",
      "type": "Bathrooms"
    },
    {
      "name": "Blue Heron Park Preserve (Nature Center)",
      "location": "Poillon Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Corporal Thompson Park/West Brighton Pool",
      "location": "Broadway, Henderson Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Double Nickel Playground",
      "location": "Osborne Street and Preston Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Grandview Playground",
      "location": "Grandview Avenue, Continental Place",
      "type": "Bathrooms"
    },
    {
      "name": "High Rock Park (McArthur Park)",
      "location": "Richmond Parkway & Moravian Cemetery at Rockland Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Joline Pool Playground (Modular Equipment)",
      "location": "Joline Avenue, Hylan Boulevard",
      "type": "Bathrooms"
    },
    {
      "name": "Lyons Pool",
      "location": "Pier 6, Victory Boulevard",
      "type": "Bathrooms"
    },
    {
      "name": "Markham Playground",
      "location": "Willowbrook Parkway, Forest Avenue & Houston Street",
      "type": "Bathrooms"
    },
    {
      "name": "Midland Beach & Boardwalk",
      "location": "Natural Area and Boardwalk from Sands Lane to Vulcan Street, East of Father Capodanno Boulevard",
      "type": "Bathrooms"
    },
    {
      "name": "Midland Field",
      "location": "Midland Avenue & Mason Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "South Beach (Saturn Playground)",
      "location": "Natural Area and Boardwalk from Sands Lane to Vulcan Street, East of Father Capodanno Boulevard",
      "type": "Bathrooms"
    },
    {
      "name": "Stapleton Playground",
      "location": "Tompkins Avenue & Broad Street",
      "type": "Bathrooms"
    },
    {
      "name": "Terrace Playground",
      "location": "Howard Avenue & Martha Street",
      "type": "Bathrooms"
    },
    {
      "name": "Todt Hill Playground",
      "location": "Schmidts Lane & Manor Road",
      "type": "Bathrooms"
    },
    {
      "name": "Coney Island",
      "location": "Brighton 2nd",
      "type": "Bathrooms"
    },
    {
      "name": "Coney Island",
      "location": "W 27 ST.",
      "type": "Bathrooms"
    },
    {
      "name": "Coney Island",
      "location": "W 33 St.",
      "type": "Bathrooms"
    },
    {
      "name": "Marine Park Nature Center",
      "location": "East 33rd Street and Avenue U",
      "type": "Bathrooms"
    },
    {
      "name": "Bendheim Playground",
      "location": "100th Street and Fifth Ave",
      "type": "Bathrooms"
    },
    {
      "name": "Liberty Pool",
      "location": "173rd Street and 106th Avenue",
      "type": "Bathrooms"
    },
    {
      "name": "Ederle Comfort Station",
      "type": "Bathrooms"
    },
    {
      "name": "Rockaway Beach 86 Comfort Station",
      "location": "Beach 86 Street",
      "type": "Bathrooms"
    },
    {
      "name": "Rockaway Beach 97 Comfort Station",
      "location": "Beach 97 Street",
      "type": "Bathrooms"
    },
    {
      "name": "Rockaway Beach 106 Comfort Station",
      "location": "Beach 106 Street",
      "type": "Bathrooms"
    },
    {
      "name": "Rockaway Beach 117th L/G",
      "location": "Beach 117 Street",
      "type": "Bathrooms"
    },
    {
      "name": "Bloomingdale Park",
      "location": "Richmond Pkwy, Bloomingdale Rd., Lenevar Ave",
      "type": "Bathrooms"
    },
    {
      "name": "Conference House Park",
      "location": "Pittsville St,Hylan Blvd.,Surf,Richard Aves",
      "type": "Bathrooms"
    },
    {
      "name": "South Beach Wetlands",
      "location": "Quintard St Bet. Quincy Ave & Father Capodanno Blvd",
      "type": "Bathrooms"
    },
    {
      "name": "Bulova Park",
      "location": "W/S 77 Street, N/S 25 Avenue",
      "type": "Baseball Fields"
    },
    {
      "name": "Betsy Head Memorial Playground",
      "location": "Livonia, Dumont, Hopkinson, Blake avenues, Strauss Street",
      "type": "Baseball Fields"
    },
    {
      "name": "De Matti Playground",
      "location": "Tompkins Avenue, Chestnut Street & Shaughnessy Lane",
      "type": "Baseball Fields"
    },
    {
      "name": "Arcilla Playground",
      "location": "Clay, Teller avenues, East 164 Street",
      "type": "Baseball Fields"
    },
    {
      "name": "St. Vartan Playground",
      "location": "1 to 2 avenues, East 35 to East 36 streets",
      "type": "Baseball Fields"
    },
    {
      "name": "Orchard Beach and Promenade",
      "location": "On Long Island Sound in Pelham Bay Park",
      "type": "Beaches"
    },
    {
      "name": "Manhattan Beach",
      "location": "On Atlantic Ocean, Oriental Blvd., from Ocean Avenue to Mackenzie Street",
      "type": "Beaches"
    },
    {
      "name": "Brighton Beach & Coney Island and Coney Island Boardwalk",
      "location": "On Atlantic Ocean, from W. 37th Street to Corbin Place",
      "type": "Beaches"
    },
    {
      "name": "Rockaway Beach and Boardwalk",
      "location": "On Atlantic Ocean, from Beach 9th Street, Far Rockaway, to Beach 149th Street, Neponsit",
      "type": "Beaches"
    },
    {
      "name": "South Beach",
      "location": "On Lower New York Bay, from Fort Wadsworth to Miller Field, Midland Beach",
      "type": "Beaches"
    },
    {
      "name": "Wolfe's Pond Beach",
      "location": "On Raritan Bay and Prince's Bay, Holton to Cornelia Avenues",
      "type": "Beaches"
    },
    {
      "name": "Midland Beach and Franklin D. Roosevelt Boardwalk",
      "location": "On Lower New York Bay, from Fort Wadsworth to Miller Field, Midland Beach",
      "type": "Beaches"
    },
    {
      "name": "The Salt Marsh Nature Center",
      "location": "East 33rd Street and Avenue U",
      "type": "Nature Centers"
    },
    {
      "name": "Audubon Center, Prospect Park",
      "location": "East Drive & Lincoln Road",
      "type": "Nature Centers"
    },
    {
      "name": "Dana Discovery Center",
      "location": "110th St. & Lenox Ave",
      "type": "Nature Centers"
    },
    {
      "name": "Blue Heron Nature Center",
      "location": "222 Poillon Avenue between Amboy Road and Hylan Blvd",
      "type": "Nature Centers"
    },
    {
      "name": "Alley Pond Adventure Center",
      "location": "Windchester Boulevard & Grand Central Parkway",
      "type": "Nature Centers"
    },
    {
      "name": "Fort Totten Visitors Center ",
      "location": "212th Street and Bell Boulevard",
      "type": "Nature Centers"
    },
    {
      "name": "Forest Park Visitor Center",
      "location": "Woodhaven Boulevard & Forest Park Drive",
      "type": "Nature Centers"
    },
    {
      "name": "Alfred E. Smith",
      "location": "80 Catherine Street",
      "type": "Recreation Centers"
    },
    {
      "name": "Asser Levy",
      "location": "Asser Levy Place",
      "type": "Recreation Centers"
    },
    {
      "name": "St. Mary's",
      "location": "450 St. Ann's Avenue",
      "type": "Recreation Centers"
    },
    {
      "name": "St. James",
      "location": "2530 Jerome Avenue",
      "type": "Recreation Centers"
    },
    {
      "name": "Brownsville Recreation Center",
      "location": "1555 Linden Boulevard",
      "type": "Recreation Centers"
    },
    {
      "name": "Von King Cultural Arts Center",
      "location": "670 Lafayette Avenue",
      "type": "Recreation Centers"
    },
    {
      "name": "Red Hook",
      "location": "155 Bay Street",
      "type": "Recreation Centers"
    },
    {
      "name": "St. John's",
      "location": "1251 Prospect Place",
      "type": "Recreation Centers"
    },
    {
      "name": "Basil Behagen (Field House)",
      "location": "East 166th Street",
      "type": "Recreation Centers"
    },
    {
      "name": "Sunset Park",
      "location": "7th Avenue at 43rd Street",
      "type": "Recreation Centers"
    },
    {
      "name": "Fort Hamilton Senior Center",
      "location": "9941 Fort Hamilton Parkway",
      "type": "Recreation Centers"
    },
    {
      "name": "Tony Dapolito",
      "location": "3 Clarkson Street",
      "type": "Recreation Centers"
    },
    {
      "name": "East 54th",
      "location": "348 East 54th Street",
      "type": "Recreation Centers"
    },
    {
      "name": "Thomas Jefferson",
      "location": "2180 1st  Avenue",
      "type": "Recreation Centers"
    },
    {
      "name": "J. Hood Wright",
      "location": "351 Fort Washington Avenue",
      "type": "Recreation Centers"
    },
    {
      "name": "Highbridge Recreation Center",
      "location": "2301 Amsterdam Avenue",
      "type": "Recreation Centers"
    },
    {
      "name": "Hansborough",
      "location": "35 West 134th Street",
      "type": "Recreation Centers"
    },
    {
      "name": "Jackie Robinson",
      "location": "85 Bradhurst Avenue",
      "type": "Recreation Centers"
    },
    {
      "name": "North Meadow (Community Center)",
      "location": "Central Park",
      "type": "Recreation Centers"
    },
    {
      "name": "Morningside (Field House)",
      "location": "410 West 123rd Street",
      "type": "Recreation Centers"
    },
    {
      "name": "Roy Wilkins Family Center",
      "location": "177th St & Baisley Boulevard",
      "type": "Recreation Centers"
    },
    {
      "name": "Sorrentino",
      "location": "18-48 Cornaga Avenue",
      "type": "Recreation Centers"
    },
    {
      "name": "Louis Armstrong (Community Center)",
      "location": "33-16 108 St.",
      "type": "Recreation Centers"
    },
    {
      "name": "A.R.R.O.W. (Field House)",
      "location": "35-30 35th Street",
      "type": "Recreation Centers"
    },
    {
      "name": "George Cromwell Recreation Center",
      "location": "Pier 6 @ Murray Hulbert  Avenue",
      "type": "Recreation Centers"
    },
    {
      "name": "Chelsea",
      "location": "430 West 25th Street",
      "type": "Recreation Centers"
    },
    {
      "name": "Pelham Fritz",
      "location": "18 Mount Morris Park West",
      "type": "Recreation Centers"
    },
    {
      "name": "Greenbelt Recreation Center",
      "location": "Brielle Avenue (between Walcott and Rockland avenues, across from Sea View Hospital)",
      "type": "Recreation Centers"
    },
    {
      "name": "West Bronx (Community Center)",
      "location": "1527 Jessup Avenue",
      "type": "Recreation Centers"
    },
    {
      "name": "Hunts Point",
      "location": "765 Manida Street",
      "type": "Recreation Centers"
    },
    {
      "name": "Det. Keith L. Williams (Field House)",
      "location": "106-16 173rd Street between 106th and 107th avenues",
      "type": "Recreation Centers"
    },
    {
      "name": "Playground for All Children (Field House)",
      "location": "111-01 Corona Avenue",
      "type": "Recreation Centers"
    },
    {
      "name": "Al Oerter Recreation Center",
      "location": "131-40 Fowler Avenue",
      "type": "Recreation Centers"
    },
    {
      "name": "Flushing Meadows Corona Park Pool & Rink",
      "location": "Avery Avenue and 131 Street",
      "type": "Recreation Centers"
    },
    {
      "name": "Claremont",
      "location": "170th Street and Clay Avenue",
      "type": "Pools"
    },
    {
      "name": "Crotona",
      "location": "173rd Street and Fulton Avenue",
      "type": "Pools"
    },
    {
      "name": "Haffen",
      "location": "Ely and Burke Avenues",
      "type": "Pools"
    },
    {
      "name": "Mapes",
      "location": "E. 180th Street between Mapes & Prospect Avenues",
      "type": "Pools"
    },
    {
      "name": "Mullaly",
      "location": "E. 164th St. bet. Jerome & River Aves.",
      "type": "Pools"
    },
    {
      "name": "Van Cortlandt",
      "location": "W. 242nd St. and Broadway",
      "type": "Pools"
    },
    {
      "name": "St. Mary's",
      "location": "St. Ann's Avenue and E. 145th Street",
      "type": "Pools"
    },
    {
      "name": "Betsy Head",
      "location": "Boyland, Livonia and Dumont Avenues",
      "type": "Pools"
    },
    {
      "name": "Bushwick",
      "location": "Humboldt Street, Flushing & Bushwick Avenues",
      "type": "Pools"
    },
    {
      "name": "Commodore Barry",
      "location": "Flushing and Park Avenues, Navy and North Elliot Streets",
      "type": "Pools"
    },
    {
      "name": "Douglas and DeGraw",
      "location": "Third Avenue and Nevins Street",
      "type": "Pools"
    },
    {
      "name": "Howard",
      "location": "Glenmore and Mother Gaston Blvd., East New York Avenue",
      "type": "Pools"
    },
    {
      "name": "Kosciusko",
      "location": "Kosciusko between Marcy and Dekalb Avenues",
      "type": "Pools"
    },
    {
      "name": "Red Hook",
      "location": "Bay and Henry Streets",
      "type": "Pools"
    },
    {
      "name": "Sunset Park",
      "location": "Seventh Avenue between 41st and 44th Streets",
      "type": "Pools"
    },
    {
      "name": "Brownsville",
      "location": "Linden and Mother Gaston Blvds. and Christopher Avenue B077",
      "type": "Pools"
    },
    {
      "name": "Metropolitan",
      "location": "Bedford and Metropolitan Avenues",
      "type": "Pools"
    },
    {
      "name": "St. John's",
      "location": "Prospect Place, between Troy and Schenectady Avenues",
      "type": "Pools"
    },
    {
      "name": "Asser Levy",
      "location": "Asser Levy Place and E. 23rd Street",
      "type": "Pools"
    },
    {
      "name": "Tony Dapolito",
      "location": "Clarkson St. and Seventh Ave. South",
      "type": "Pools"
    },
    {
      "name": "Dry Dock",
      "location": "E. 10th St. between Aves. C and D",
      "type": "Pools"
    },
    {
      "name": "Hamilton Fish",
      "location": "Pitt Street and Houston Street",
      "type": "Pools"
    },
    {
      "name": "Highbridge",
      "location": "Amsterdam Ave. and W. 173rd Street",
      "type": "Pools"
    },
    {
      "name": "Jackie Robinson",
      "location": "Bradhurst Avenue and W. 146th Street",
      "type": "Pools"
    },
    {
      "name": "John Jay",
      "location": "East of York Avenue on 77th St.",
      "type": "Pools"
    },
    {
      "name": "Lasker",
      "location": "110th Street & Lenox Avenue",
      "type": "Pools"
    },
    {
      "name": "Marcus Garvey",
      "location": "124th Street and Fifth Avenue",
      "type": "Pools"
    },
    {
      "name": "Sheltering Arms",
      "location": "W. 129th Street and Amsterdam Ave.",
      "type": "Pools"
    },
    {
      "name": "Thomas Jefferson",
      "location": "E. 112th Street and First Avenue",
      "type": "Pools"
    },
    {
      "name": "Wagner",
      "location": "E. 124th Street between First and Second Avenues",
      "type": "Pools"
    },
    {
      "name": "Asser Levy",
      "location": "Asser Levy Place and E. 23rd Street",
      "type": "Pools"
    },
    {
      "name": "Chelsea",
      "location": "West 25th St. between 9th & 10th Aves",
      "type": "Pools"
    },
    {
      "name": "Hansborough",
      "location": "134th St. between Fifth & Lenox Aves.",
      "type": "Pools"
    },
    {
      "name": "Recreation Center 54",
      "location": "E. 54th St. bet. First and Second Aves.",
      "type": "Pools"
    },
    {
      "name": "Frederick Douglass",
      "location": "Amsterdam Ave. between 100th & 102nd Streets",
      "type": "Pools"
    },
    {
      "name": "Thompson Street",
      "location": "Thompson St. between Spring & Prince Streets",
      "type": "Pools"
    },
    {
      "name": "Astoria",
      "location": "19th Street and 23rd Drive",
      "type": "Pools"
    },
    {
      "name": "Fisher",
      "location": "99th Street and 32nd Avenue",
      "type": "Pools"
    },
    {
      "name": "Liberty",
      "location": "173rd Street and 106th Avenue",
      "type": "Pools"
    },
    {
      "name": "Fort Totten",
      "location": "338 Story Avenue",
      "type": "Pools"
    },
    {
      "name": "Roy Wilkins",
      "location": "177th Street and Baisley Boulevard",
      "type": "Pools"
    },
    {
      "name": "Faber",
      "location": "Faber Street and Richmond Terrace",
      "type": "Pools"
    },
    {
      "name": "Lyons",
      "location": "Pier 6 and Victory Boulevard",
      "type": "Pools"
    },
    {
      "name": "Tottenville",
      "location": "Hylan Boulevard and Joline Avenue",
      "type": "Pools"
    },
    {
      "name": "West Brighton",
      "location": "Henderson Avenue between Broadway and Chappel Streets",
      "type": "Pools"
    },
    {
      "name": "Flushing Meadows Corona Park Pool & Rink",
      "location": "Avery Avenue and 131 Street",
      "type": "Pools"
    },
    {
      "name": "Flushing Meadows Corona Park Pool & Rink",
      "location": "Avery Avenue and 131 Street",
      "type": "Pools"
    },
    {
      "name": "Floating Pool",
      "location": "Tiffany Street & Viele Avenue ",
      "type": "Pools"
    }
  ]

/*
Takes array of objects, and the key to be translated of the object.
toString() should not strictly be necessary, but node outputs some but not all
keys as non-strings; specifically
{
  'Bocce Courts': 'Bocce Courts',
  'Basketball Courts': 'Basketball Courts',
  'Tennis Courts': 'Tennis Courts',
  Playgrounds: 'Playgrounds',
  'Football Fields': 'Football Fields',
  'Ice Skating Rinks': 'Ice Skating Rinks',
  Bathrooms: 'Bathrooms',
  'Baseball Fields': 'Baseball Fields',
  Beaches: 'Beaches',
  'Nature Centers': 'Nature Centers',
  'Recreation Centers': 'Recreation Centers',
  Pools: 'Pools'
}
However, Object.keys works all right.
[
  'Bocce Courts',
  'Basketball Courts',
  'Tennis Courts',
  'Playgrounds',
  'Football Fields',
  'Ice Skating Rinks',
  'Bathrooms',
  'Baseball Fields',
  'Beaches',
  'Nature Centers',
  'Recreation Centers',
  'Pools'
]
*/
const isolateFieldsToTranslate = (arrayOfObjects, keyValue) => {
    const returnObject = {};
    for (let i = 0; i < arrayOfObjects.length; i++) {
        if (!returnObject[arrayOfObjects[i][keyValue]]) {
            console.log(arrayOfObjects[i][keyValue].toString());
            returnObject[arrayOfObjects[i][keyValue].toString()] = arrayOfObjects[i][keyValue];
        }
    }
    //console.log(Object.keys(returnObject));
    return returnObject;
}

//console.log(isolateFieldsToTranslate(rawData, "type"));

/*
Node expresses some of keys in output above as non-strings.  Below is test
to ensure key string references still work.  (They do.)
*/
const rawData2 = {
  'Bocce Courts': 'Bocce Courts',
  'Basketball Courts': 'Basketball Courts',
  'Tennis Courts': 'Tennis Courts',
  Playgrounds: 'Playgroundsah',
  'Football Fields': 'Football Fields',
  'Ice Skating Rinks': 'Ice Skating Rinks',
  Bathrooms: 'Bathrooms',
  'Baseball Fields': 'Baseball Fields',
  Beaches: 'Beaches',
  'Nature Centers': 'Nature Centers',
  'Recreation Centers': 'Recreation Centers',
  Pools: 'Pools'
};

//console.log(rawData2["Playgrounds"]);

/*
Next, I take the objects created and convert to CSV. (comma separated values)
*/

const objToCSV = (objectInput) => {
  const returnString = Object.keys(objectInput).join(",")
  return returnString;
}

const rawData3 = objToCSV(rawData2);
//console.log(objToCSV(rawData2));

/*
Takes the English key string and the (Language To Translate) value string and
returns an object created from them.

The overall process is the user takes the data, isolates the field to translate in
an object, then turns the object into an English string.

The English string can then be copy/pasted into Google Translate, which should preserve
punctuation.

*/
const csvToObj = (keyStringEnglish, valueStringTranslate) => {
  const returnObject = {};
  const keyArray = keyStringEnglish.split(",");
  const valueArray = valueStringTranslate.split(",");
  for (let i = 0; i < keyArray.length; i++) {
    returnObject[keyArray[i]] = valueArray[i];
  }
  return returnObject;
}

const sampData1 = "Bocce Courts,Basketball Courts,Tennis Courts,Playgrounds,Football Fields,Ice Skating Rinks,Bathrooms,Baseball Fields,Beaches,Nature Centers,Recreation Centers,Pools";

/*
Took the above English string, pasted into Google Translate, got below.  In this way,
we can quickly and easily add support for whatever number of languages, PROVIDED
we know what is to be translated ahead of time.

Ideally there shouldn't be too many different words / phrases.  A couple hundred
different words/phrases shouldn't be an issue, but entire dictionaries capable
of translating speech would be impractical.
*/

const sampData2 = "Canchas de bochas, canchas de baloncesto, canchas de tenis, parques infantiles, campos de fútbol, ​​pistas de patinaje sobre hielo, baños, campos de béisbol, playas, centros naturales, centros recreativos, piscinas";

console.log(csvToObj(sampData1, sampData2));
