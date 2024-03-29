

function run (test_case_list, runTest) {
    let settings = {
        json: { stringify: { space: 0 } }
    };

    let test_case_passed_list = [];
    let test_case_failed_list = [];

    console.log ('\n===== Starting =====\n');

    console.log (`Running: ${test_case_list.length} Test cases ...`);

    for (const test_case of test_case_list) {
        console.log (`\nRunning Test Case ...`);

        test_case.actual = runTest (test_case.params);

        if (test_case.expected === test_case.actual) {
            test_case_passed_list.push (test_case);
        } else {
            test_case_failed_list.push (test_case);
        }
    }

    console.log ('\n');

    if (test_case_passed_list.length > 0) {
        console.log (`----- Passed: ${test_case_passed_list.length} of ${test_case_list.length} -----`);

        for (const test_case_passed of test_case_passed_list) {
            console.log (`\nPassed: ${test_case_passed.name}`);
            console.log (`Params: ${JSON.stringify(test_case_passed.params, undefined, settings.json.stringify.space)}`);
            console.log (`Result: ${test_case_passed.actual}`);
        }
    }

    console.log ('\n');

    if (test_case_failed_list.length > 0) {
        console.error (`----- Failed: ${test_case_failed_list.length} of ${test_case_list.length} -----`);
        for (const test_case_failed of test_case_failed_list) {
            console.error (`\nFailed: ${test_case_failed.name}`);
            console.error (`Params: ${JSON.stringify(test_case_failed.params, undefined, settings.json.stringify.space)}`);
            console.error (`Expected: ${test_case_failed.expected}. Actual: ${test_case_failed.actual}`);
        }
    }

    console.log (`\n===== Completed =====\n`);
}

module.exports = {
    run 
}