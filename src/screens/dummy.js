 
 
 //react native elements tab view for details screen
 {/* <View style={{marginTop:RFValue(3)}}> */}
    {/* <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}> */}
    <Tab
    value={index}
    onChange={(e) => setIndex(e)}
    variant="default"
    indicatorStyle={{
      backgroundColor: 'orange',
      height: 2,
    }}
    containerStyle={{backgroundColor:"#e0dfdb", borderRadius:10,marginTop:RFValue(3)}}
    scrollable={true}
  >

  <Tab.Item
    title="Job Details"
    titleStyle={styles.tabItemTitleStyle}
   
  />
  <Tab.Item
    title="About Company"
    titleStyle={styles.tabItemTitleStyle}
   
  />
  <Tab.Item
    title="Reviews"
    titleStyle={styles.tabItemTitleStyle}
    
  />
  <Tab.Item
    title="Benefits"
    titleStyle={styles.tabItemTitleStyle}
   
  />
  
</Tab>
{/* </ScrollView> */}

<TabView value={index} onChange={setIndex} animationType="spring">
  <TabView.Item >
    {/* Job details card*/}
    
  </TabView.Item>
  
  <TabView.Item >
    <Text style={{fontWeight:"bold", fontSize:RFValue(20)}}>Job Description</Text>
  </TabView.Item>
  <TabView.Item >
    <Text h1>Cart</Text>
  </TabView.Item>
</TabView>