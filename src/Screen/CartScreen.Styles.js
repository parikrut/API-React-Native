import { StyleSheet } from 'react-native';
import Colors from '../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  categoryContainer: {
    maxHeight: height(35),
  },
  categoryTitle: {
    fontSize: width(4),
    fontWeight: 'bold',
    paddingVertical: height(2),
    paddingLeft: width(5)
  },
  productContainer: {
    height: height(23),
    width: width(35),
    backgroundColor: Colors.backgroundWhite,
    borderRadius: width(5),
    elevation: 7,
    borderWidth: 0.5,
    borderColor: Colors.primaryPink,
    shadowColor: Colors.primaryBlue,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    padding: 3,
    marginTop: 2,
    marginBottom: 25,
    marginHorizontal: width(2),
    alignItems: 'center',
    paddingHorizontal: width(1),
    justifyContent: 'space-between',
    paddingTop: height(1)
  },
  productContainerAll: {
    height: height(23),
    width: width(32),
    backgroundColor: Colors.backgroundWhite,
    borderRadius: width(2),
    elevation: 7,
    borderWidth: 0.5,
    borderColor: Colors.primaryPink,
    shadowColor: Colors.primaryBlue,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    padding: 3,
    marginTop: 2,
    marginBottom: 25,
    marginLeft: width(1),
    alignItems: 'center',
    paddingHorizontal: width(1),
    justifyContent: 'space-between',
    paddingTop: height(1)
  },
  productImage: {
    height: height(12.5),
    marginBottom: height(1)
  },
  productTitle: {
    color: Colors.primaryPink,
    fontWeight: 'bold',
    fontSize: width(3.2),
    marginHorizontal: width(2)
  },
  priceConainer: {
    flexDirection: 'row',
    width: "90%",
    justifyContent: 'space-between'
  },
  priceLableText: {
    fontSize: width(3),
    fontWeight: 'bold'
  },
  priceText: {
    color: Colors.blue,
    fontSize: width(3)
  },
  loaderContainer: {
    width: width(100),
    alignItems: 'center'
  },
  rateContainer: {
    position: 'absolute',
    borderColor: Colors.darkGray,
    borderWidth: 1,
    backgroundColor: Colors.backgroundWhite,
    borderRadius: width(3),
    paddingHorizontal: width(1),
    flexDirection: 'row'
  },
  bestContainer: {
    position: 'absolute',
    paddingHorizontal: width(1),
    right: 0
  },
  ratingText: {
    color: Colors.darkGray,
    fontSize: width(3),
    marginRight: width(1)
  },
  specialOfferContainer: {
    position: 'absolute',
    borderColor: Colors.darkGray,
    borderWidth: 1,
    backgroundColor: Colors.primaryYellow,
    borderRadius: width(3),
    paddingHorizontal: width(1),
    flexDirection: 'row',
    top: height(10),
    right: 0,
    // transform: [{ rotate: '315deg' }]
  },
  specialOfferText: {
    color: Colors.backgroundWhite,
    fontSize: width(3),
    marginRight: width(1)
  },
  searchRow: {
    flexDirection: 'row',
    width: width(100),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dropDownContainer: {
    width: '25%',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    height: height(6),
    marginTop: 12,
    justifyContent: 'center'
  },
  selectedCategoryText: {
    fontSize: width(3),
    width: width(16),
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width(2),
    alignItems: 'center'
  }
});
export default styles;
