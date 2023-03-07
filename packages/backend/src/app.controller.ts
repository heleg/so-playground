import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("test-data")
  getTestData() {
    return {
      error: false,
      data: {
        testData: [
          {
            id: 1,
            name: "Test 1",
          },
          {
            id: 2,
            name: "Test 2",
          },
          {
            id: 3,
            name: "Test 3",
          },
        ],
      },
    };
  }
}
