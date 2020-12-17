import { shallowMount } from '@vue/test-utils'
import Calendar from '@/components/Calendar.vue'

describe('Calendar.vue', () => {

    it('show days of the month Dec 2020', () => {
        const mockDate = new Date(1608050681103)
        const wrapper = shallowMount(Calendar, {
            propsData: {availableDays: [], startCurrentDate: mockDate, today: mockDate}
        })
        const daysElements = wrapper.findAll('.calendar-days .calendar-day');
        expect(daysElements.length).toBe(35);
        expect(daysElements.at(0).text()).toBe("29");
        expect(daysElements.at(1).text()).toBe("30");
        expect(daysElements.at(2).text()).toBe("1");
        expect(daysElements.at(33).text()).toBe("1");
        expect(daysElements.at(34).text()).toBe("2");
    })

    it('shows start day after day selection', async() => {
        const mockDate = new Date(1608050681103)
        const wrapper = shallowMount(Calendar, {
            propsData: {availableDays: allDecember, startCurrentDate: mockDate, today: mockDate}
        })
        const daysElements = wrapper.findAll('.calendar-days .calendar-day div');
        const startDay=daysElements.at(10)
        await startDay.trigger("click");
        expect(startDay.classes()).toContain("start");
    })

    it('shows end day after day selection', async() => {
        const mockDate = new Date(1608050681103)
        const wrapper = shallowMount(Calendar, {
            propsData: {availableDays: allDecember, startCurrentDate: mockDate, today: mockDate}
        })
        const daysElements = wrapper.findAll('.calendar-days .calendar-day div');
        const startDay=daysElements.at(10)
        const endDay=daysElements.at(20);
        await startDay.trigger("click");
        await endDay.trigger("click");
        expect(endDay.classes()).toContain("end");
    })

    it('filters separated days groups', async() => {
        const mockDate = new Date(1608050681103)
        const wrapper = shallowMount(Calendar, {
            propsData: {availableDays: fewDaysDecember, startCurrentDate: mockDate, today: mockDate}
        })
        const daysElements = wrapper.findAll('.calendar-days .calendar-day>div');
        const startDay=daysElements.at(26);
        const endDay=daysElements.at(27);
        const dayOutsideGroup=daysElements.at(31);
        expect(dayOutsideGroup.classes()).toContain("available")
        await startDay.trigger("click");
        expect(dayOutsideGroup.classes()).not.toContain("available")
        await endDay.trigger("click");
        expect(dayOutsideGroup.classes()).toContain("available")
    })

    it('navigates through months', async() => {
        const mockDate = new Date(1608050681103)
        const wrapper = shallowMount(Calendar, {
            propsData: {availableDays: fewDaysDecember, startCurrentDate: mockDate, today: mockDate}
        })
        const arrowRight = wrapper.find('.calendar-arrow-right');
        const header = wrapper.find('.calendar-month');
        expect(header.text()).toBe("December 2020");
        await arrowRight.trigger("click");
        expect(header.text()).toBe("January 2021");
    })
});

const allDecember= [
    { year: 2020, month: 12, day: 1 },
    { year: 2020, month: 12, day: 2 },
    { year: 2020, month: 12, day: 3 },
    { year: 2020, month: 12, day: 4 },
    { year: 2020, month: 12, day: 5 },
    { year: 2020, month: 12, day: 6 },
    { year: 2020, month: 12, day: 7 },
    { year: 2020, month: 12, day: 8 },
    { year: 2020, month: 12, day: 9 },
    { year: 2020, month: 12, day: 10 },
    { year: 2020, month: 12, day: 11 },
    { year: 2020, month: 12, day: 12 },
    { year: 2020, month: 12, day: 13 },
    { year: 2020, month: 12, day: 14 },
    { year: 2020, month: 12, day: 15 },
    { year: 2020, month: 12, day: 16 },
    { year: 2020, month: 12, day: 17 },
    { year: 2020, month: 12, day: 18 },
    { year: 2020, month: 12, day: 19 },
    { year: 2020, month: 12, day: 20 },
    { year: 2020, month: 12, day: 21 },
    { year: 2020, month: 12, day: 22 },
    { year: 2020, month: 12, day: 23 },
    { year: 2020, month: 12, day: 24 },
    { year: 2020, month: 12, day: 25 },
    { year: 2020, month: 12, day: 26 },
    { year: 2020, month: 12, day: 27 },
    { year: 2020, month: 12, day: 28 },
    { year: 2020, month: 12, day: 29 },
    { year: 2020, month: 12, day: 30 },
    { year: 2020, month: 12, day: 31 }
]
const fewDaysDecember= [
    { year: 2020, month: 12, day: 25 },
    { year: 2020, month: 12, day: 26 },
    { year: 2020, month: 12, day: 30 },
    { year: 2020, month: 12, day: 31 },
]
