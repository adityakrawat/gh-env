import {test, expect} from '@playwright/test';

test('events creation', async ({request}) => {
    const testTitle = 'Test Event';
    const response = await request.post('/', {
        data: {
            title: testTitle,
        },
    });
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.body();
    const parsedBody = JSON.parse(responseBody.toString());
    expect(parsedBody).toHaveProperty('eventId');
    expect(parsedBody.eventId.title).toBe(testTitle);
});

test('events retrieval', async ({request}) => {
    const response = await request.get('/');
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.body();
    const parsedBody = JSON.parse(responseBody.toString());
    expect(parsedBody).toHaveProperty('events');
    expect(parsedBody.events.length).toBeGreaterThan(0);
});
