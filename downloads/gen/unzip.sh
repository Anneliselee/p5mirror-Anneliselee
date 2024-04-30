cd "/Users/anneliselee/Documents/GitHub/p5mirror-Anneliselee/downloads/../p5projects"
#
echo unzip 1 "Interactive_Galaxy-wGoASExM_"
rm -rf "./Interactive_Galaxy-wGoASExM_"
mkdir "./Interactive_Galaxy-wGoASExM_"
pushd "./Interactive_Galaxy-wGoASExM_" > /dev/null
unzip -q "../../downloads/zips/Interactive_Galaxy-wGoASExM_"
popd > /dev/null
#
echo unzip 2 "Interactive_Galaxy copy-emrca3kkz"
rm -rf "./Interactive_Galaxy copy-emrca3kkz"
mkdir "./Interactive_Galaxy copy-emrca3kkz"
pushd "./Interactive_Galaxy copy-emrca3kkz" > /dev/null
unzip -q "../../downloads/zips/Interactive_Galaxy copy-emrca3kkz"
popd > /dev/null
#
echo unzip 3 "combination_3_NOT_WORKING-6Y5W_ft06"
rm -rf "./combination_3_NOT_WORKING-6Y5W_ft06"
mkdir "./combination_3_NOT_WORKING-6Y5W_ft06"
pushd "./combination_3_NOT_WORKING-6Y5W_ft06" > /dev/null
unzip -q "../../downloads/zips/combination_3_NOT_WORKING-6Y5W_ft06"
popd > /dev/null
#
echo unzip 4 "AUDIO REACTIVE GALAXY copy-tPrLayxgm"
rm -rf "./AUDIO REACTIVE GALAXY copy-tPrLayxgm"
mkdir "./AUDIO REACTIVE GALAXY copy-tPrLayxgm"
pushd "./AUDIO REACTIVE GALAXY copy-tPrLayxgm" > /dev/null
unzip -q "../../downloads/zips/AUDIO REACTIVE GALAXY copy-tPrLayxgm"
popd > /dev/null
#
echo unzip 5 "Interactive_Screens_Final-y3BSfUsrS"
rm -rf "./Interactive_Screens_Final-y3BSfUsrS"
mkdir "./Interactive_Screens_Final-y3BSfUsrS"
pushd "./Interactive_Screens_Final-y3BSfUsrS" > /dev/null
unzip -q "../../downloads/zips/Interactive_Screens_Final-y3BSfUsrS"
popd > /dev/null
#
echo unzip 6 "combine galaxy + audio reactive particles-ZhPICG6wp"
rm -rf "./combine galaxy + audio reactive particles-ZhPICG6wp"
mkdir "./combine galaxy + audio reactive particles-ZhPICG6wp"
pushd "./combine galaxy + audio reactive particles-ZhPICG6wp" > /dev/null
unzip -q "../../downloads/zips/combine galaxy + audio reactive particles-ZhPICG6wp"
popd > /dev/null
#
echo unzip 7 "face tracking and rotating star copy-eFYPRA50"
rm -rf "./face tracking and rotating star copy-eFYPRA50"
mkdir "./face tracking and rotating star copy-eFYPRA50"
pushd "./face tracking and rotating star copy-eFYPRA50" > /dev/null
unzip -q "../../downloads/zips/face tracking and rotating star copy-eFYPRA50"
popd > /dev/null
#
echo unzip 8 "combine galaxy + audio reactive particles copy-eH3xWyf_S"
rm -rf "./combine galaxy + audio reactive particles copy-eH3xWyf_S"
mkdir "./combine galaxy + audio reactive particles copy-eH3xWyf_S"
pushd "./combine galaxy + audio reactive particles copy-eH3xWyf_S" > /dev/null
unzip -q "../../downloads/zips/combine galaxy + audio reactive particles copy-eH3xWyf_S"
popd > /dev/null
#
echo unzip 9 "AUDIO REACTIVE GALAXY-tr49eonaF"
rm -rf "./AUDIO REACTIVE GALAXY-tr49eonaF"
mkdir "./AUDIO REACTIVE GALAXY-tr49eonaF"
pushd "./AUDIO REACTIVE GALAXY-tr49eonaF" > /dev/null
unzip -q "../../downloads/zips/AUDIO REACTIVE GALAXY-tr49eonaF"
popd > /dev/null
#
echo unzip 10 "face tracking and rotating star-o82OaP2pP"
rm -rf "./face tracking and rotating star-o82OaP2pP"
mkdir "./face tracking and rotating star-o82OaP2pP"
pushd "./face tracking and rotating star-o82OaP2pP" > /dev/null
unzip -q "../../downloads/zips/face tracking and rotating star-o82OaP2pP"
popd > /dev/null
#
echo unzip 11 "LukeChoi Sound Galaxy copy-KEBjROO89"
rm -rf "./LukeChoi Sound Galaxy copy-KEBjROO89"
mkdir "./LukeChoi Sound Galaxy copy-KEBjROO89"
pushd "./LukeChoi Sound Galaxy copy-KEBjROO89" > /dev/null
unzip -q "../../downloads/zips/LukeChoi Sound Galaxy copy-KEBjROO89"
popd > /dev/null
#
echo unzip 12 "ims-05-Ann copy-VOQ6CsA8e"
rm -rf "./ims-05-Ann copy-VOQ6CsA8e"
mkdir "./ims-05-Ann copy-VOQ6CsA8e"
pushd "./ims-05-Ann copy-VOQ6CsA8e" > /dev/null
unzip -q "../../downloads/zips/ims-05-Ann copy-VOQ6CsA8e"
popd > /dev/null
#
echo unzip 13 "ims-05-Ann-0faTg5CBr"
rm -rf "./ims-05-Ann-0faTg5CBr"
mkdir "./ims-05-Ann-0faTg5CBr"
pushd "./ims-05-Ann-0faTg5CBr" > /dev/null
unzip -q "../../downloads/zips/ims-05-Ann-0faTg5CBr"
popd > /dev/null
#
echo unzip 14 "ims-04-ann-jbAN-fULr"
rm -rf "./ims-04-ann-jbAN-fULr"
mkdir "./ims-04-ann-jbAN-fULr"
pushd "./ims-04-ann-jbAN-fULr" > /dev/null
unzip -q "../../downloads/zips/ims-04-ann-jbAN-fULr"
popd > /dev/null
#
echo unzip 15 "Face Tracking copy-ZnbSqIwnE"
rm -rf "./Face Tracking copy-ZnbSqIwnE"
mkdir "./Face Tracking copy-ZnbSqIwnE"
pushd "./Face Tracking copy-ZnbSqIwnE" > /dev/null
unzip -q "../../downloads/zips/Face Tracking copy-ZnbSqIwnE"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi