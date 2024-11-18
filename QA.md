# QA Documentation

## What is a defect?
A defect is when the actual result doesn’t match the expected result. Usually, we have our expected results from the product specification document. However, it is rare when a product specification document includes all the aspects of the product. For example, if the software is difficult to understand, hard to use, slow, or just not right and it wasn’t mentioned in the product specification, it is a valid defect.

## What is a test plan and what does a good test plan include?
A test plan is a detailed document that includes the entrance criteria, the scope of testing, the test strategies, objectives, schedule, deadlines, resources required to complete the testing, and exit criteria. It is the point of reference based on which testing activities are executed and coordinated among the QA team. The test plan is shared with Business Analysts, Project Manager, and Developers to offer transparency into testing activities so that all stakeholders know how the software will be tested.

The ultimate goal of the test planning process is communicating (not recording) the software test team’s intent, its expectations, and its understanding of the testing that’s being performed.

## What is a test case and what does an excellent test case include?
A test case describes steps to perform a test for a specific feature or functionality. A good test case includes detailed steps, test data, expected results, test environment, and all the prerequisites to perform a test.

## What is a Software Testing Life Cycle (STLC) for your team?
Usually, each team adopts the STLC that works best for them. STLC is a testing process that has specific steps to be executed in a sequence to ensure that the quality goals have been met.

### My team’s phases of STLC:
1. Requirement (prod specs) analysis.
2. Crafting and reviewing a test plan.
3. QA handoff.
4. Execution/Testing.
5. QA signoff.

## What is a defect life cycle?
It is the stages that a defect goes through from opening to resolution:
1. The defect was raised and assigned for a fix.
2. Fixed.
3. Retest.
4. If the defect is still there, reopen and start with step 1.
5. Otherwise closed.

## What is Requirements Traceability Matrix (RTM) in testing?
RTM is a document that maps and traces user requirements with test cases. The main purpose of RTM is to validate that all requirements are checked via test cases such that no functionality is unchecked during software testing.

## What is a regression suite and why do we need it?
The regression suite is a collection of test scenarios that address the various functionalities that are important to the software. We typically create a regression suite from existing tests that have already been executed in previous release cycles. The reason we execute existing tests is that new changes can break existing working functionalities, so before releasing new changes to our customers, we need to execute our regression suite.

## How big is your regression suite, and how often do you run it?
My regression suite is around 300 test cases. We execute the regression suite before each release.

## How do you determine which test case should be part of the regression suite?
- The test case should be part of the important functionality.
- It should be a repeatable test case.

## What is a smoke test?
The smoke test is initial testing to reveal simple failures. They are a subset of test cases that cover the most important functionality. From my experience, it is useful when automated to catch issues earlier in the development. For example, it can be integrated with developers' CI pipeline and catch the issues before even going to the QA environment.

## What kind of different testing techniques do you know and use?
There are a bunch of different test types. Let’s focus on the most used ones:
- **Positive testing:** It determines that your application works as expected.
- **Negative testing:** It ensures that your application can handle invalid input and unexpected user behavior.
- **Equivalence partitioning:** It is a testing technique that divides the input data of a unit into partitions of equivalent data from which test cases can be derived.
- **Boundary value testing:** It is a testing technique for the edge inputs. The behavior at the edge of the equivalence partition is more likely to be incorrect than the behavior within the partition.
- **Ad hoc testing:** It is an informal or unstructured software testing type that aims to break the testing process to find possible defects.

## What is black and white box testing?
- **Black box testing:** Testing without knowledge of how the application works internally (code structure, implementation details). However, we know the requirements and what our application should do.
- **White box testing:** Testing with knowledge of the internal code structure and implementation details. We review them and look for potential defects. Technical skills are required to perform white box testing.

## What is performance testing?
Performance testing is a non-functional testing that determines the stability, speed, scalability, and responsiveness of an application. Some examples are processing speed, data transfer velocity, network bandwidth usage, maximum concurrent users, memory utilization, workload efficiency, and latency times.

## What is 508 compliance testing and how do you do it?
508 compliance testing is accessibility testing to make sure individuals with disabilities can access and use your software. Section 508 is essentially a part of the United States Workforce Rehabilitation Act of 1973. It defines a set of requirements and guidelines that need to be followed to ensure that information is easy and conveniently accessible to individuals with disabilities.

We can do 508 compliance testing:
- Using available online verification tools.
- Manually inspecting our application and analyzing Section 508 requirements to make sure we are compliant. For example, all images should have an alt text message.

## Tell me about the latest defect you discovered.
- **Defect #1:** My latest issue was related to the form we have on our submission page. It has multiple required fields, and once the form is submitted it verifies them. The issue appeared when I started filling up the form from the middle (not from the top as usually users do); It would let me submit and later, the process would fail. The expected behavior was not to let submit the form and display a message about the required field. The feature works well when the form is filled from the top to the bottom. I could catch this issue by applying an unexpected behavior test scenario.
- **Defect #2:** My latest issue was related to the table which had a pagination feature. It would work well when you wouldn’t go to the last pagination page, but once you visited the last page and went back to the previous pages, our table started showing the wrong data with missing rows. I found this issue by applying edge case scenarios.

## How do you manage your test data?
- I generate my test data.
- We load test data from the production environment.