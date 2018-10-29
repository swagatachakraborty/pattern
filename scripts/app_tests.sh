set -xe
./scripts/run_test.sh ./createDiamond.js ./appTestData/allDiamondInput ./appTestData/allDiamondOutput
./scripts/run_test.sh ./createTriangle.js ./appTestData/allTriangleInput ./appTestData/allTriangleOutput
./scripts/run_test.sh ./createRectangle.js ./appTestData/allRectangleInput ./appTestData/allRectangleOutput
