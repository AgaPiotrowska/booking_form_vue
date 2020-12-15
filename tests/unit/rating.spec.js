import { shallowMount } from '@vue/test-utils'
import Rating from '@/components/Rating.vue'

const starFull = '/assets/star-full.svg';
const starHalf = '/assets/star-half.svg';
const starEmpty = '/assets/star-empty.svg';

describe('Rating.vue', () => {


    it('show five stars when rating is greater than five', () => {
        const wrapper6 = shallowMount(Rating, {
            propsData: { rating: { value: 6 }}
        })
        const wrapper100 = shallowMount(Rating, {
            propsData: { rating: { value: 100 }}
        })
        expect(wrapper6.vm.stars).toEqual([starFull, starFull, starFull, starFull, starFull])
        expect(wrapper100.vm.stars).toEqual([starFull, starFull, starFull, starFull, starFull])
    })

    it('show empty stars when rating equals less than 0', () => {
        const wrapper01 = shallowMount(Rating, {
            propsData: { rating: { value: -1 }}
        })
        const wrapper030 = shallowMount(Rating, {
            propsData: { rating: { value: -30.6 }}
        })
        expect(wrapper01.vm.stars).toEqual([starEmpty, starEmpty, starEmpty, starEmpty, starEmpty])
        expect(wrapper030.vm.stars).toEqual([starEmpty, starEmpty, starEmpty, starEmpty, starEmpty])
    })

    it('counts stars when rating is partial number', () => {
        const wrapper01 = shallowMount(Rating, {
            propsData: { rating: { value: 0.1 }}
        })
        const wrapper03 = shallowMount(Rating, {
            propsData: { rating: { value: 0.3 }}
        })
        const wrapper05 = shallowMount(Rating, {
            propsData: { rating: { value: 0.5 }}
        })
        const wrapper079 = shallowMount(Rating, {
            propsData: { rating: { value: 0.79 }}
        })
        const wrapper081 = shallowMount(Rating, {
            propsData: { rating: { value: 0.81 }}
        })
        const wrapper23 = shallowMount(Rating, {
            propsData: { rating: { value: 2.3 }}
        })
        const wrapper39 = shallowMount(Rating, {
            propsData: { rating: { value: 3.9 }}
        })
        const wrapper45 = shallowMount(Rating, {
            propsData: { rating: { value: 4.5 }}
        })

        expect(wrapper01.vm.stars).toEqual([starEmpty, starEmpty, starEmpty, starEmpty, starEmpty])
        expect(wrapper03.vm.stars).toEqual([starHalf, starEmpty, starEmpty, starEmpty, starEmpty])
        expect(wrapper05.vm.stars).toEqual([starHalf, starEmpty, starEmpty, starEmpty, starEmpty])
        expect(wrapper079.vm.stars).toEqual([starHalf, starEmpty, starEmpty, starEmpty, starEmpty])
        expect(wrapper081.vm.stars).toEqual([starFull, starEmpty, starEmpty, starEmpty, starEmpty])
        expect(wrapper23.vm.stars).toEqual([starFull, starFull, starHalf, starEmpty, starEmpty])
        expect(wrapper39.vm.stars).toEqual([starFull, starFull, starFull, starFull, starEmpty])
        expect(wrapper45.vm.stars).toEqual([starFull, starFull, starFull, starFull, starHalf])
    })

    it('show stars when rating is integral number', () => {
        const wrapper0 = shallowMount(Rating, {
            propsData: { rating: { value: 0 }}
        })
        const wrapper13 = shallowMount(Rating, {
            propsData: { rating: { value: 1.3 }}
        })
        //todo: add more cases

        expect(wrapper0.findAll(`[src="${starEmpty}"]`).length).toBe(5);
        expect(wrapper0.findAll(`[src="${starHalf}"]`).length).toBe(0);
        expect(wrapper0.findAll(`[src="${starFull}"]`).length).toBe(0);

        expect(wrapper13.findAll(`[src="${starEmpty}"]`).length).toBe(3);
        expect(wrapper13.findAll(`[src="${starHalf}"]`).length).toBe(1);
        expect(wrapper13.findAll(`[src="${starFull}"]`).length).toBe(1);
    })
});


