import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be albe to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '12346428648',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12346428648');
  });

  it('should not be albe to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2020, 4, 19);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '12346428648',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '12346428648',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
